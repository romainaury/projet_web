import { useEffect, useState } from "react";
import CardComponent from "../card/CardComponent";

const CardListBoard = (props, children) => {
  return <div className="vw-100">{children}</div>;
};

export const MatchComponent = ({ status, players, user }) => {
  const [isPending, setIsPending] = useState(
    String(status).includes("pending")
  );

  useEffect(() => {
    setIsPending(String(status).includes("pending"));
  }, [status]);

  return isPending ? (
    "En attente de l'adversaire"
  ) : (
    <div className="d-flex flex-column flex-grow-1 h-100">
      caca
      <div className="d-flex flex-row container">
        <div className="hand">
          main
          {Array(players.player2.hand).map(() => "CARTE")}
        </div>
        <div className="board">
          {players.player2.board.map((champion) => (
            <CardComponent
              key={players.player2.id + champion.key}
              champion={champion}
            />
          ))}
        </div>
      </div>
      <div className="row d-flex flex-row ">
        {players.player1.board.map((champion) => (
          <CardComponent
            key={champion.id}
            isSplited={false}
            champion={champion}
            onClick={() => {
              /* */
            }}
          />
        ))}
        <div className="hand row">
          main
          {players.player1.hand.map((champion) => (
            <CardComponent
              key={players.player1.id + champion.key}
              isSplited={false}
              champion={champion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchComponent;
