import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListeJoueursContainer from "../joueurs/ListeJoueursContainer";
import PrepareDeckContainer from "../deck/PrepareDeckContainer";
import MatchContainer from "../matchs/MatchContainer";
import { amIConnected, getMatchInfo, finDuMatch } from "../../utils/queries";

export default function Home({ isLoggedIn, setMatch, user, match }) {
  const [status, setStatus] = useState("SEARCHING");
  const [matchInfo, setMatchInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    amIConnected(user)
      .then((response) => response.json())
      .then((data) => {
        if (!data.connectedUser) navigate("/connexion");
      })
      .catch((err) => navigate("/connexion"));
  }, []);

  useEffect(() => {
    getMatchInfo(user)
      .then((response) => response.json())
      .then((data) =>
        setMatch({
          ...data,
          player1:
            user.id === data.player1.id
              ? { ...data.player1 }
              : { ...data.player2 },
          player2:
            user.id === data.player1.id
              ? { ...data.player2 }
              : { ...data.player1 },
        })
      )
      .catch(console.log);
    const interval = setInterval(() => {
      getMatchInfo(user)
        .then((response) => response.json())
        .then((data) =>
          setMatch({
            ...data,
            player1:
              user.id === data.player1.id
                ? { ...data.player1 }
                : { ...data.player2 },
            player2:
              user.id === data.player1.id
                ? { ...data.player2 }
                : { ...data.player1 },
          })
        )
        .catch(searchGame);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [matchInfo]);

  useEffect(() => {
    if (matchInfo.status !== "" && String(matchInfo).includes("Turn"))
      startMatch();
  }, [matchInfo]);

  const searchGame = () => {
    setStatus("SEARCHING");
    finDuMatch();
    setMatchInfo({});
  };

  const chooseDeck = (m) => {
    setStatus("DECK_COMPOSING");
  };

  const startMatch = () => {
    setStatus("PLAYING");
  };

  const GAME_STATUS = Object.freeze({
    SEARCHING: (
      <ListeJoueursContainer
        updateStatus={chooseDeck}
        resetStatus={searchGame}
      />
    ),
    DECK_COMPOSING: (
      <PrepareDeckContainer
        updateStatus={startMatch}
        resetStatus={searchGame}
      />
    ),
    PLAYING: <MatchContainer resetStatus={searchGame} />,
  });

  return <>{isLoggedIn() && GAME_STATUS[status]}</>;
}
