import { useNavigate } from "react-router";

const LogoutOutComponent = ({ user }) => {
    const navigate = useNavigate();
    console.log("token", user.token);
    fetch("http://localhost:3001/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "WWW-Authenticate": user.token,
        },
    }).then((response) => {
        console.log("response", response);
        navigate("/connexion");
    }, (error) => {
        console.log("Unable to logout", error);
    }
    );
}

export default LogoutOutComponent;