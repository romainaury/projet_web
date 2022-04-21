import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { piocherUneCarte , jouerUneCarteChampion} from "../../utils/queries";

export default function PreparePiocheComponents({ isLoggedIn, user }) {
  const token = useSelector((state) => state.main.user.token);
  function pioche() {
    console.log("pioche", token );
    piocherUneCarte(token)
      .then((response) => {
        if (response.status === 200) console.log("Ok ");
      })
      .catch((err) => {
        console.log(err);
        alert("erreur pioche ");
      });
  }

  let key ="Jax"
  function playCArt() {
    console.log("pioche", token );
    jouerUneCarteChampion(token, key )
      .then((response) => {
        if (response.status === 200) console.log("Ok ");
      })
      .catch((err) => {
        console.log(err);
        alert("erreur playacrt ");
      });
  }


  return (
    <div>
      preparePiocheComponents
      <button onClick={(e) => pioche()}>Pioché</button>

      <button onClick={(e) => playCArt()}>play cart </button>
    </div>
  );
}
