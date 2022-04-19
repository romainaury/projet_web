// si vous voulez vraiement comprendre tous le code de cet page je vous invite à regarder cet vidéo https://www.youtube.com/watch?v=boZJtNzRCDQ
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function NavbarComponent({ isLoggedIn, user }) {
  const [token, setTooken] = useState(user.token)

  useEffect(() => {
    setTooken(user.token)
  }, [user]);
  console.log("user  is : ", user);
  console.log("token  is : ", token);



  function participate(e) {
    // const params = {
    // www-Authentificate : token,
    // };

    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json", "WWW-Authentificate": token },
      // body: JSON.stringify(params),
    };

    fetch("http://localhost:3001/matchmaking/participate", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch(() => {
        alert("Utilisateur pas réussis participate ");
      });
  }



  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        Accueil
      </Link>

      <div>
        {/*si l'utilisateur est connecté alors il a accès aux différents bouton  : si non il n'y a pas accès  */}
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
              onClick={(e) => participate()}
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
              className="btn btn-primary ms-2"
            >
              Se connecter
            </Link>


          </>
        )}



      </div>
    </nav>
  );
}
