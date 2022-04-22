// si vous voulez vraiement comprendre tous le code de cet page je vous invite à regarder cet vidéo https://www.youtube.com/watch?v=boZJtNzRCDQ
import React from "react";
import { Link } from "react-router-dom";

const NavbarComponent = ({ isLoggedIn }) => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">
        League of Stones
      </Link>

      <div>
        {isLoggedIn() ? (
          <>
            <Link to="/deconnexion" className="btn btn-secondary ms-2">
              Déconnexion{" "}
            </Link>
          </>
        ) : (
          <>
            <Link to="/connexion" className="btn btn-primary ms-2">
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
};

export default NavbarComponent;
