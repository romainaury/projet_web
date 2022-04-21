import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getAllUsersQuery,
  askMatch,
  AskParticipate,
  acceptRequestMatch,
} from "../../utils/queries";
import "./liste-joueurs-style.css";

const ListeJoueursComponent = ({ isLoggedIn, user }) => {
  const [users, setUsers] = useState([]);
  const [request, setRequest] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (user.id !== "") {
        getAllUsersQuery(user)
          .then((response) => response.json())
          .then(setUsers)
          .catch(console.log);
        if (isLoggedIn()) {
          AskParticipate(user.token)
            .then((response) => {
              if (response.status === 200) return response.json();
            })
            .then((response) => setRequest(response.request))
            .catch(console.log);
        }
      }
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [isLoggedIn, user]);

  return (
    <div className={"container "}>
      <h1>Liste Joueurs en attente</h1>
      <>
        <span>{user.name}</span>
        {users.map((u) => {
          return <CarteJoueur key={u.matchmakingId} {...u} />;
        })}

        <h2>Demandes externes :</h2>
        {request.map((u) => {
          return <RequestCard key={u.matchmakingId} {...u} />;
        })}
      </>
    </div>
  );
};

const CarteJoueur = ({ email, name, matchmakingId }) => {
  const token = useSelector((state) => state.main.user.token);

  const handleClick = () => {
    askMatch(matchmakingId, token)
      .then((response) => {
        if (response.status === 200)
          console.log("Match demandé à " + matchmakingId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div onClick={handleClick} className="col-12 px-1 py-1 bg-light rounded-3">
      <p className="mb-1">
        {name} ({email})
      </p>
    </div>
  );
};

const RequestCard = ({ email, name, matchmakingId }) => {
  const token = useSelector((state) => state.main.user.token);

  function accepte(matchmakingId, token) {
    console.log("accepte fight ", matchmakingId, token);
    acceptRequestMatch(matchmakingId, token)
      .then((response) => {
        if (response.status === 200) console.log("Ok ");
      })
      .catch((err) => {
        console.log(err);
        alert("erreur accepte match ");
      });
  }
  return (
    <div className="col-12 px-1 py-1 bg-light rounded-3">
      <p className="mb-1">
        {name} ({email})
      </p>
      <button onClick={(e) => accepte(matchmakingId, token)}>Ok</button>
      {/* <button onClick={(e)=>refuse (matchmakingId, token )}>Non</button> */}
    </div>
  );
};
export default ListeJoueursComponent;
