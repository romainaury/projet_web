import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getAllUsersQuery,
  askMatch,
  AskParticipate,
  acceptRequestMatch,
} from "../../utils/queries";
import "./liste-joueurs-style.css";

const ListeJoueursComponent = ({ isLoggedIn, user, updateStatus }) => {
  const [users, setUsers] = useState([]);
  const [request, setRequest] = useState([]);

  const fetchInfo = useCallback(async () => {
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
          .then((response) => {
            if (response.match) updateStatus(response.match);
            setRequest(response.request);
          })
          .catch(console.log);
      }
    }
  }, [isLoggedIn, updateStatus, user]);

  useEffect(() => {
    fetchInfo();
    const interval = setInterval(() => {
      fetchInfo();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [fetchInfo]);

  return (
    <div className={"container my-4"}>
      <span className="display-3 my-3">Bienvenue {user.name}</span>
      <div className="row">
        <div className="col-sm-6 col-12">
          <h1 className="text-center">Liste Joueurs en attente</h1>
          {users.map((u) => {
            return <CarteJoueur key={u.matchmakingId} {...u} />;
          })}
        </div>
        <div className="col-sm-6 col-12">
          <h1 className="text-center">Demandes externes</h1>
          {request.map((u) => {
            return (
              <RequestCard
                key={u.matchmakingId}
                callback={updateStatus}
                {...u}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const CarteJoueur = ({ email, name, matchmakingId }) => {
  const token = useSelector((state) => state.main.user.token);

  const handleClick = () => {
    askMatch(matchmakingId, token).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div onClick={handleClick} className="col-12  px-2 py-2 bg-light rounded-3 d-flex flex-row justify-content-between bg-light rounded-3">
      <p className="mb-1">
        {name} ({email})
      </p>
    </div>
  );
};

const RequestCard = ({ name, matchmakingId, callback }) => {
  const token = useSelector((state) => state.main.user.token);

  function accepte(matchmakingId, token) {
    console.log("accepte fight ", matchmakingId, token);
    acceptRequestMatch(matchmakingId, token)
      .then(async (response) => {
        if (response.status === 200) callback(await response.json());
      })
      .catch((err) => {
        console.log(err);
        alert("erreur accepte match ");
      });
  }
  return (
    <div className="col-12 px-2 py-2 bg-light rounded-3 d-flex flex-row justify-content-between bg-light rounded-3">
      <p className="mb-1">
        {name} 
      </p>
      <button className="btn btn-primary" onClick={(e) => accepte(matchmakingId, token)}>Accepter</button>
      {/* <button onClick={(e)=>refuse (matchmakingId, token )}>Non</button> */}
    </div>
  );
};
export default ListeJoueursComponent;
