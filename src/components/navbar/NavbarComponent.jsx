// si vous voulez vraiement comprendre tous le code de cet page je vous invite à regarder cet vidéo https://www.youtube.com/watch?v=boZJtNzRCDQ
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function NavbarComponent({ isLoggedIn }) {
  //on récupère les informtions général pour savoir si l'utilisateur ets connecter par exemple
  // const { toggleModals, currentUser } = useContext(UserContext);
  // const navigate = useNavigate();
  // fonction permettant de se déconnecter
  // const logOut = async () => {
  //   try {
  //     await signOut(auth);
  //     navigate("/");
  //   } catch {
  //     alert(
  //       "for some reasons we can't deconnect , please check you internet connexion and retry "
  //     );
  //   }
  // };
  // console.log("currentUser", currentUser);
  // let log = isLoggedIn();
  // console.log("il est loggé : ", log);
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        Accueil
      </Link>

      <div>
        {/*si l'utilisateur est connecté alors il a accès aux différents bouton  : si non il n'y a pas accès  */}
        {isLoggedIn() ? (
          <>
            <Link to="/inscription" className="btn btn-primary ms-2">
              S'inscire{" "}
            </Link>
            <Link
              to="/connection"
              /*className="btn eval-final"*/ className="btn btn-primary ms-2"
            >
              Se connecter
            </Link>

            {/* <button  className="btn btn-danger ms-2">
          Déconnexion
        </button> */}
          </>
        ) : (
          <>
            <Link to="/logout" className="btn btn-primary ms-2">
              DECONNEXION{" "}
            </Link>
            <Link
              to="/"
              /*className="btn eval-final"*/ className="btn btn-primary ms-2"
            >
              AUTRE
            </Link>
            {/* <button  className="btn btn-danger ms-2">
          Déconnexion
        </button> */}
          </>
        )}

        {/* <>
           
            <button
              // onClick={() => toggleModals("signUp")}
              className="btn btn-primary"
            >
             Inscription
            </button>
            <button
              // onClick={() => toggleModals("signIn")}
              className="btn btn-primary ms-2"
            >
              Connexion
            </button>
          </> */}
        {/* )} */}
      </div>
    </nav>
  );
}
