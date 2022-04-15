// import React from 'react'
import { Form, Field } from "react-final-form";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import "./authentification-style.css";

export default function Connection () {
  const handleSubmit = () => {};
  // const onSubmit = () => {};
  const validate = () => {};
  const InterestPicker = () => {};
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
    console.log(res, "res");
    if (res == 500) {
      setValidation("erreur");
    } else {
      setConnecter(true);
    }
  };

  function verif(values) {
   
      onSubmit(values);
    
  }

  const MyForm = () => (
    <Form
      onSubmit={verif}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="email"
            render={({ input, meta }) => (
              <div>
                <label>email</label>
                <input  {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          />

        

          {/* <h2>Render Function as Children</h2> */}
          <Field name="password">
            {({ input, meta }) => (
              <div>
                <label>password</label>
                <input type="password" {...input} placeholder="password" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <div>
            <p className="inscription-validation">{validation}</p>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    />
  );

  return (
    <>
      {connecter ? (
        <>
          <h1>Vous vous êtes Connecter</h1>
        </>
      ) : (
        <>
          <h1>Connection  </h1>
          <MyForm></MyForm>
        </>
      )}
    </>
  );
}