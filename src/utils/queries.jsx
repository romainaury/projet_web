import { useSelector } from "react-redux";

export const SignInQuery = async ({ name, email, password }) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  };

  return fetch("http://localhost:3001/user", requestOptions);
};

export const GetAllUsersQuery = async () => {
  const token = useSelector((state) => state.main.user.token);

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", "WWW-Authenticate": token },
  };

  return fetch("http://localhost:3001/matchmaking/getAll", requestOptions);
};
