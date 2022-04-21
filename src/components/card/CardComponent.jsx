import React from "react";
import "./card-style.scss";

const CardComponent = ({ champion, onClick, isSplited }) => {
  const { key, name, title, info } = champion;

  return (
    <div
      className={
        "flex-shrink-1 " +
        "card border-0 py-1 px-1 " +
        (isSplited ? "col-6 col-lg-4 col-xl-3" : " col-6 col-md-4 col-lg-3 col-xl-3") +
        "position-relative bg-transparent"
      }
      onClick={() => onClick(champion)}
    >
      <div className="text-white border border-3 border-dark overflow-hidden cursor-pointer position-relative bg-transparent">
        <img
          className="position-absolute h-100 w-100 bg-img"
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${key}_0.jpg`}
          alt={name}
        />
        <p className="mx-2 my-0 fw-bold">{name}</p>
        <p className="mx-2 my-0 py-0 text-end">
          {[...Array(info.difficulty)].map(() => (
            <i className="col-1 bi bi-star-fill"></i>
          ))}
        </p>
        <div className="row">
          <img
            className="col-12"
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${key}_0.jpg`}
            alt={name}
          />
          <p className="d-block fw-bold text-center">{title}</p>

          <div className="ms-2 me-0 col-12">
            <p className="fw-bold my-1">Attaque : {info.attack}</p>
            <p className="fw-bold">Armure : {info.defense}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;