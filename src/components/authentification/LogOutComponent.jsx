import { useNavigate } from "react-router";
import { logOutQuery } from "../../utils/queries";

const LogOutComponent = ({ user, logOutAction }) => {
    const navigate = useNavigate();
    logOutQuery(user)
        .then(
            (response) => {
                navigate("/connexion");
                logOutAction();
            },
            (error) => {
                console.log("Unable to logout", error);
            }
        );
};

export default LogOutComponent;
