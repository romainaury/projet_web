import { useSelector } from "react-redux";

export const SignInQuery = async ({ name, email, password }) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  };

  return fetch("http://localhost:3001/user", requestOptions);
};

export const LogOutQuery = async ({ user }) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "WWW-Authenticate": user.token,
    },
  };

  return fetch("http://localhost:3001/logout", requestOptions);
}

export const GetAllUsersQuery = async () => {
  const token = useSelector((state) => state.main.user.token);

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", "WWW-Authenticate": token },
  };

  return fetch("http://localhost:3001/matchmaking/getAll", requestOptions);
};



export const AskParticipate = async (token) => {
 // console.log("on y arrive")
  
  
  const headers = new Headers();
  
  headers.append("WWW-Authenticate", token);
  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers,
    
  };
 // console.log("headers  is 2 : ", requestOptions);
  return fetch("http://localhost:3001/matchmaking/participate", requestOptions);
};





/* Envoyer une requête
Il est possible d’envoyer une demande pour jouer avec un joueur présent dans la liste. Pour
cela il faut l’identifiant du matchmaking du joueur à qui on veut envoyer la requête. Ce Web
Service est le suivant :
/matchmaking/request
 
 
 "matchmakingId" : l’identifiant du matchmaking du joueur à qui on souhaite envoyer la requête
*/
export const AskMatch = async (matchmakingId, token) => {
  const token = token 

  const params = {
    matchmakingId: matchmakingId,
  };

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", "WWW-Authenticate": token },
    body: JSON.stringify(params),
  };

  return fetch("http://localhost:3001/matchmaking/request", requestOptions);
};

/*Accepter une requête
Lorsque le joueur a reçu une requête pour jouer, il peut l’accepter. Pour cela il faut utiliser le
Web Service suivant :
/matchmaking/acceptRequest
 
 
Ce Web Service nécessite 1 paramètre :
— "matchmakingId" : l’identifiant du matchmaking du joueur ayant envoyé la requête
Cet identifiant doit nécessairement être associé à un joueur qui vous a envoyé une requête.
Dans ce cas un match est créé, et les informations concernant ce match sont retournées :*/
export const AcceptRequestMatch = async (matchmakingId, token ) => {
  const token = token ;
  
  const params = {
    matchmakingId: matchmakingId,
  };

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", "WWW-Authenticate": token },
    body: JSON.stringify(params),
  };

  return fetch(
    "http://localhost:3001/matchmaking/acceptRequest",
    requestOptions
  );
};





/*------------------------------------------------Match ------------------------------------------------------------*/


export const finDuMatch= async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
   
  };

  return fetch("http://localhost:3001/match/finisMatch", requestOptions);
};



export const  finDuTour= async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
   
  };

  return fetch("http://localhost:3001/match/endTurn", requestOptions);
};

export const   attaquerDirectementLesPointsDeVieDelAdversaire= async ({ card }) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ card }),
   
  };

  return fetch("http://localhost:3001/match/attackPlayer", requestOptions);
};

export const   faireAttaquerCnChampion= async ({ card, ennemyCard }) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ card , ennemyCard}),
   
  };

  return fetch("http://localhost:3001/match/attack", requestOptions);
};

export const   jouerUneCarteChampion= async ({ card, playCard }) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ card , playCard}),
   
  };

  return fetch("http://localhost:3001/match/attack", requestOptions);
};