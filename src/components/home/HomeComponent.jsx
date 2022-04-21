import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListeJoueursContainer from "../joueurs/ListeJoueursContainer";

export default function Home({ isLoggedIn, user, match }) {
  const [status, setStatus] = useState("SEARCHING");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/connexion");
    }
  }, [isLoggedIn, navigate]);

  const startMatch = () => {
    setStatus("DECK_COMPOSING");
  };

  const GAME_STATUS = Object.freeze({
    SEARCHING: <ListeJoueursContainer startMatch={startMatch} />,
    // DECK_COMPOSING: <Deck startMatch={startMatch} />,
  });

  return <>{isLoggedIn() && GAME_STATUS[status]}</>;
}
