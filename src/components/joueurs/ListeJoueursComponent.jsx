import React, { useEffect, useState } from "react";
import { getAllUsersQuery } from "../../utils/queries";
import "./liste-joueurs-style.css";

const ListeJoueursComponent = ({ user, className = "" }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (user.id !== "") {
      getAllUsersQuery(user.token)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setUsers(response);
          console.log(response);
        })
        .catch(console.log);
    }
  }, [user]);

  return (
    
    <div className={"container " + className}>
      <h1>hey</h1>
      <span>{user.name}</span>
      {users.map((u) => {
        console.log(u);
        return <CarteJoueur {...u} />;
      })}
    </div>
  );
};

const CarteJoueur = ({ email, name, matchmakingId }) => {
  return (
    <div className="col-12 px-1 py-1 bor">
      <p className="mb-1">Nom : {name}</p>
      <p>E-Mail : {email}</p>
    </div>
  );
};

export default ListeJoueursComponent;
