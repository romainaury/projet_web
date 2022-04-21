import { Field, Form } from "react-final-form";
import React from "react";
import { useNavigate } from "react-router";
import "./authentification-style.css";

const LogInComponent = ({ setUser }) => {
  const navigate = useNavigate();

  const onSubmit = async ({ pseudo, password }) => {
    const params = {
      email: pseudo + "@l3.fr",
      password: password,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    };

    fetch("http://localhost:3001/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Erreur de connexion");
      });
  };

  return (
    <div className={"row h-100 justify-content-center mx-0 login-form"}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form className="col-md-4 my-4 auth-form" onSubmit={handleSubmit}>
            <h1 className="text-center">Connexion</h1>
            <div>
              <label className="form-label">Pseudo</label>
              <Field
                className={"form-control mb-2 "}
                name="pseudo"
                component="input"
                placeholder="Pseudo"
                allowNull={false}
                required={true}
              />
            </div>
            <div>
              <label className="form-label">Password</label>
              <Field
                className={"form-control mb-2 "}
                name="password"
                type="password"
                component="input"
                placeholder="Password"
                allowNull={false}
                required={true}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Se connecter
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default LogInComponent;
