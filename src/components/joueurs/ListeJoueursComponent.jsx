import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUsersQuery, askMatch } from "../../utils/queries";
import "./liste-joueurs-style.css";

const ListeJoueursComponent = ({ user, className = "" }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setInterval(() => {
    if (user.id !== "") {
      console.log(user);
      getAllUsersQuery(user)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setUsers(response);
          console.log(response);
        })
        .catch(console.log);
    }
    
  }, 15000);
  }, [user]);


  
  return (
    <div className={"container " + className}>
      <h1>Liste Joueur</h1>
      
      <span>{user.name}</span>
      {users.map((u) => {
        console.log(u);
        return <CarteJoueur {...u} />;
      })}
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
      console.log(err)
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

export default ListeJoueursComponent;
