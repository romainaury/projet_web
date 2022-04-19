import { useNavigate } from "react-router";
import { LogOutQuery } from "../../utils/queries";

const LogOutComponent = ({ user, logOutAction }) => {
    const navigate = useNavigate();
    LogOutQuery({ user })
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
