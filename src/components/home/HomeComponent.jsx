import React from "react";
import ListeJoueursContainer from "../joueurs/ListeJoueursContainer";

export default function Home({ isLoggedIn }) {
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
