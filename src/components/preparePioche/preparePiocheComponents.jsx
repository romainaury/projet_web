import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { piocherUneCarte , jouerUneCarteChampion, faireAttaquerUnChampion, attaquerDirectementLesPointsDeVieDelAdversaire, finDuTour, finDuMatch} from "../../utils/queries";

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
  function playCart() {
    console.log("playCart", token );
    jouerUneCarteChampion(token, key )
      .then((response) => {
        if (response.status === 200) console.log("Ok ");
      })
      .catch((err) => {
        console.log(err);
        alert("erreur playacrt ");
      });
  }


  let cards ="Jax"
  let enneyCards="Sona"
  function attack() {
    console.log("attack", token );
    faireAttaquerUnChampion(token, cards, enneyCards )
      .then((response) => {
        if (response.status === 200) console.log("Ok ");
      })
      .catch((err) => {
        console.log(err);
        alert("erreur attack ");
      });
  }

  

  function attackPlayer() {
    console.log("attack", token );
    attaquerDirectementLesPointsDeVieDelAdversaire(token )
      .then((response) => {
        if (response.status === 200) console.log("Ok ");
      })
      .catch((err) => {
        console.log(err);
        alert("erreur attack ");
      });
  }


  function finduTourfront() {
    console.log("finduTourfront", token );
    finDuTour(token )
      .then((response) => {
        if (response.status === 200) console.log("Ok ");
      })
      .catch((err) => {
        console.log(err);
        alert("erreur front ");
      });
  }

  function stopMatch(){
    console.log("stopMatch", token );
    finDuMatch(token)
      .then((response) => {
        if (response.status === 200) console.log("Ok ");
      })
      .catch((err) => {
        console.log(err);
        alert("stopMatch front ");
      })
  }

  return (
    <div>
      preparePiocheComponents
      <button onClick={(e) => pioche()}>Pioché</button>

      <button onClick={(e) => playCart()}>play cart </button>
      <button onClick={(e) => attack()}>faireAttaquerUnChampion </button>
      <button onClick={(e) => attackPlayer()}>faireAttaquerUnChampion </button>
      <button onClick={(e) => finduTourfront()}> finduTour</button>
      <button onClick={(e) => stopMatch()}> finduMatch</button>
    </div>
  );
}
