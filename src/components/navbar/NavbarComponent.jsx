// si vous voulez vraiement comprendre tous le code de cet page je vous invite à regarder cet vidéo https://www.youtube.com/watch?v=boZJtNzRCDQ
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AskParticipate } from "../../utils/queries";
// import { useNavigate } from "react-router-dom";

export default function NavbarComponent({ isLoggedIn, user }) {
  const [token, setToken] = useState(user.token);

  useEffect(() => {
    setToken(user.token);
  }, [user]);
  console.log("user  is : ", user);
  console.log("token  is : ", token);

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
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        Accueil
      </Link>

      <div>
        {isLoggedIn() ? (
          <>
            <Link to="/deconnexion" className="btn btn-primary ms-2">
              DECONNEXION{" "}
            </Link>
            <Link
              to="/"
              /*className="btn eval-final"*/ className="btn btn-primary ms-2"
            >
              AUTRE
            </Link>
            <div
              onClick={(e) => participate(e)}
              className="btn btn-primary ms-2"
            >
              Participer{" "}
            </div>
          </>
        ) : (
          <>
            <Link to="/inscription" className="btn btn-primary ms-2">
              S'inscire{" "}
            </Link>
            <Link
              to="/connexion"
              /*className="btn eval-final"*/ className="btn btn-primary ms-2"
            >
              Se connecter
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
