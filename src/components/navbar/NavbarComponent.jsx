// si vous voulez vraiement comprendre tous le code de cet page je vous invite à regarder cet vidéo https://www.youtube.com/watch?v=boZJtNzRCDQ
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AskParticipate } from "../../utils/queries";

export default function NavbarComponent({ isLoggedIn, user }) {
  const [token, setToken] = useState(user.token);

  useEffect(() => {
    setToken(user.token);
  }, [user]);

  function participate(e) {
    AskParticipate(token)
      .then((response) => {
        if (response.status === 200) console.log("ok");
      })
      .catch(() => {
        alert("erreur participer");
      });
  }

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">
        League of Stones
      </Link>

      <div>
        {isLoggedIn() ? (
          <>
            <div
              onClick={(e) => participate(e)}
              className="btn btn-primary ms-2"
            >
              Participer{" "}
            </div>
            <Link to="/deconnexion" className="btn btn-secondary ms-2">
              Déconnexion{" "}
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/connexion"
              /*className="btn eval-final"*/ className="btn btn-primary ms-2"
            >
              Se connecter
            </Link>
            <Link to="/inscription" className="btn btn-secondary ms-2">
              S'inscrire{" "}
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
