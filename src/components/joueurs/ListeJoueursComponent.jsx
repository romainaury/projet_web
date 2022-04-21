import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getAllUsersQuery,
  askMatch,
  AskParticipate,
  acceptRequestMatch
} from "../../utils/queries";
import "./liste-joueurs-style.css";

const ListeJoueursComponent = ({ isLoggedIn , user, className = "" }) => {
  const [users, setUsers] = useState([]);
  const token = useSelector((state) => state.main.user.token);
  const [request, setRequest] = useState([]);
  useEffect(() => {
    setInterval(() => {
      if (user.id !== "") {
        // console.log(user);
        getAllUsersQuery(user)
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            setUsers(response);
           
          })
          .catch(console.log);
        if ( isLoggedIn ()){
        AskParticipate(token)
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            }
          })
          .then((response) => setRequest(response.request))
          .catch(() => {
            alert("erreur participer");
          });
      }}
    }, 15000);
  }, [user]);

  return (
    <div className={"container " + className}>
      <h1>Liste Joueur</h1>
      <>
        <span>{user.name}</span>
        {users.map((u) => {
          console.log(u);
          return <CarteJoueur {...u} />;
        })}
        {console.log("all request", request )}

        <h2>Les Personnes qui vous ont demandés en combat </h2>
        {request.map((u) => {
          console.log(u);
          return <RequestList {...u} />;
        })}
      </>
    </div>
  );
};

function handleClickCarteJoueur(matchmakingId, token) {
  console.log("you click on joueur ", matchmakingId, token);
  askMatch(matchmakingId, token)
    .then((response) => {
      if (response.status === 200) console.log("Ok ");
    })
    .catch((err) => {
      console.log(err);
      alert("erreur ask match ");
    });
}

const CarteJoueur = ({ email, name, matchmakingId }) => {
  const token = useSelector((state) => state.main.user.token);
  return (
    <div
      onClick={(e) => handleClickCarteJoueur(matchmakingId, token)}
      className="col-12 px-1 py-1 bg-light rounded-3"
    >
      <p className="mb-1">
        {name} ({email})
      </p>
    </div>
  );
};



function handleClickRequestJoueur(){

}

const RequestList = ({ email, name, matchmakingId }) => {
  const token = useSelector((state) => state.main.user.token);


  // function refuse (matchmakingId, token){
  //   console.log("no  fight ", matchmakingId, token)
  // }

  function accepte (matchmakingId, token){
    console.log("accepte fight ", matchmakingId, token)
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
    <div
      onClick={(e) => handleClickRequestJoueur(matchmakingId, token)}
      className="col-12 px-1 py-1 bg-light rounded-3"
    >
      <p className="mb-1">
        {name} ({email})
      </p>
      <button onClick={(e)=> accepte( matchmakingId, token)}>Ok</button>
      {/* <button onClick={(e)=>refuse (matchmakingId, token )}>Non</button> */}
    </div>
  );
};
export default ListeJoueursComponent;
