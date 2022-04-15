import { Field, Form } from "react-final-form";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
const LogInComponent = () => {
//   const onSubmit = (values) => {
//     console.log(values.pseudo);
//     alert(values);
//   };
const [connecter, setConnecter] = useState(false);
const [validation, setValidation] = useState("");


  const Log = async ({ email,  password }) => {
    console.log("reçu avant envoie", email,password )
    const res = await axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    });
    return res;
  };

    const onSubmit = (values) => {
    console.log("prout", values);
    let res;
    res = Log(values);
    console.log( "res",res);
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
    <Form
      onSubmit={verif}
      render={({ handleSubmit }) => (
        <form className="container" onSubmit={handleSubmit}>
          <h1>Connexion</h1>
          <div>
            <label className="form-label">Email</label>
            <Field
              className={"form-control mb-2 "}
              name="email"
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
  );
};

export default LogInComponent;
