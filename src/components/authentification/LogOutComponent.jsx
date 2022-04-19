import { useNavigate } from "react-router";

const LogOutComponent = ({ user, logOutAction }) => {
  const navigate = useNavigate();

  fetch("http://localhost:3001/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "WWW-Authenticate": user.token,
    },
  }).then(
    (response) => {
      console.log("response", response);
      navigate("/connexion");
      logOutAction();
    },
    (error) => {
      console.log("Unable to logout", error);
    }
  );
};

export default LogOutComponent;
