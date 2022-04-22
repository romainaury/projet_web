import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListeJoueursContainer from "../joueurs/ListeJoueursContainer";
import PrepareDeckComponent from "../deck/PrepareDeckComponent";
import { getMatchInfo } from "../../utils/queries";

export default function Home({ isLoggedIn, setMatch, user, match }) {
  const [status, setStatus] = useState("SEARCHING");
  const [matchInfo, setMatchInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/connexion");
    }
  }, [isLoggedIn, navigate]);

  const searchGame = () => {
    setStatus("SEARCHING");
    setMatchInfo({});
  };

  const chooseDeck = (m) => {
    setStatus("DECK_COMPOSING");
    setMatchInfo(m);
    getMatchInfo(user.token)
      .then((response) => response.json())
      .then(setMatch)
      .catch(console.log);
  };

  const startMatch = () => {
    setStatus("PLAYING");
    getMatchInfo(user.token)
      .then((response) => response.json())
      .then(setMatch)
      .catch(console.log);
  };

  const GAME_STATUS = Object.freeze({
    SEARCHING: (
      <ListeJoueursContainer
        updateStatus={chooseDeck}
        resetStatus={searchGame}
      />
    ),
    DECK_COMPOSING: (
      <PrepareDeckComponent
        updateStatus={startMatch}
        resetStatus={searchGame}
      />
    ),
    PLAYING: "PROUT",
  });

  return <>{isLoggedIn() && GAME_STATUS[status]}</>;
}
