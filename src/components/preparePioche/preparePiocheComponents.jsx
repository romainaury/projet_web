import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { piocherUneCarte } from "../../utils/queries";

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
        alert("erreur ask match ");
      });
  }
  return (
    <div>
      preparePiocheComponents
      <button onClick={(e) => pioche()}>Pioché</button>
    </div>
  );
}
