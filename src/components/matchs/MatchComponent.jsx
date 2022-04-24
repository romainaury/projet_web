import { useEffect, useState } from "react";
import { jouerUneCarteChampion } from "../../utils/queries";
import CardComponent from "../card/CardComponent";

export const MatchComponent = ({ status, players, user }) => {
  const [isPending, setIsPending] = useState(
    String(status).includes("pending")
  );

  useEffect(() => {
    setIsPending(String(status).includes("pending"));
  }, [status]);

  return isPending ? (
    <p>En attente de l'adversaire</p>
  ) : (
    <div className="d-flex flex-column flex-grow-1 vh-100">
      <div className="h-50">
        <div className="hand d-flex flex-row justify-content-center">
          {[...Array(players.player2.hand)].map((_, i) => (
            <span key={i}>Card</span>
          ))}
        </div>
        <hr className="w-100" />

        <div className="board d-flex flex-row justify-content-center">
          {players.player2.board.map((champion) => (
            <CardComponent
              key={players.player2.id + champion.key}
              champion={champion}
            />
          ))}
        </div>
      </div>
      <div className="h-50">
        <div className="board d-flex flex-row justify-content-center">
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
        </div>
        <hr className="w-100" />
        <div className="hand d-flex flex-row justify-content-center">
          {players.player1.hand.map((champion) => (
            <CardComponent
              key={players.player1.id + champion.key}
              isSplited={false}
              champion={champion}
              onClick={() => {
                jouerUneCarteChampion(user.token, champion.key);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchComponent;
