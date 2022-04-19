import { Field, Form } from "react-final-form";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./authentification-style.css"
const LogInComponent = ({ setUser }) => {
  //   const onSubmit = (values) => {
  //     console.log(values.pseudo);
  //     alert(values);
  //   };
  const [connecter, setConnecter] = useState(false);
  const [validation, setValidation] = useState("");
  const navigate = useNavigate();

  const Log2 = async ({ pseudo, password }) => {
    console.log("reçu avant envoie", pseudo, password);
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
      .then((response) => {
        console.log(response);
        setUser(response);
        navigate("/");
      })
      .catch(() => {
        alert("Utilisateur pas réussis co ");
      });
  };

  const onSubmit = (values) => {
    console.log("prout", values);
    let res;
    res = Log2(values);
    console.log("res", res);
    if (res == 500) {
      setValidation("erreur");
    } else {
      setConnecter(true);
    }
  };

  function verif(values) {
    onSubmit(values);
  }

  return (
    <div className={"row h-100 justify-content-center"}>
      <Form
        onSubmit={verif}
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
