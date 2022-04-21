import React from "react";
import ListeJoueursContainer from "../joueurs/ListeJoueursContainer";

export default function Home({ isLoggedIn }) {
  const GAME_STATUS = Object.freeze({
    SEARCHING: <ListeJoueursContainer startMatch={startMatch}/>,
  })

  const startMatch = () => {

  }
  return (
    <>
      <h1>Welcome on Home</h1>
      {isLoggedIn() ? (
        <>
          connect <ListeJoueursContainer />
        </>
      ) : (
        <>non connect </>
      )}
    </>
  );
}
