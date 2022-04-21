import React, { useEffect, useState } from "react";
import Card from "../card/CardComponent";
import CardList from "../card/CardListComponent";
import { getAllCards, initialiserDeck } from "../../utils/queries";
import "./prepare-deck-style.scss";

const PrepareDeckComponent = ({ user }) => {
  const [availableChampions, setAvailableChampions] = useState([]);
  const [selectedChampions, setSelectedChampions] = useState([]);

  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const ajouterChampion = (champion) => {
    if(selectedChampions.length < 20){
        setAvailableChampions(availableChampions.filter((c) => c !== champion));
        selectedChampions.push(champion);
        selectedChampions.sort(compare);
        setSelectedChampions(selectedChampions);
    }
  };

  const retirerChampion = (champion) => {
    setSelectedChampions(selectedChampions.filter((c) => c !== champion));
    availableChampions.push(champion);
    availableChampions.sort(compare);
    setAvailableChampions(availableChampions);
  };

  const envoyerDeck = () => {
    if (selectedChampions.length === 20)
      initialiserDeck(
        user.token,
        selectedChampions.map((champion) => ({ key: champion.key }))
      );
    else alert("Selectionner 20 champions");
  };

  useEffect(() => {
    getAllCards()
      .then((response) => response.json())
      .then(
        (data) =>
          availableChampions.length === 0 &&
          selectedChampions.length === 0 &&
          setAvailableChampions(data.sort(compare))
      )
      .catch(console.log);
  }, [availableChampions, selectedChampions]);

  return (
    <div className=" mx-0 my-0 px-0 py-0 d-flex flex-row justify-content-center position-relative overflow-hidden">
      <CardList
        title={`Champions disponibles`}
        isSplited={true}
        dark={false}
      >
        {availableChampions.map((champion) => {
          return (
            <Card
              key={champion.id}
              isSplited={true}
              champion={champion}
              onClick={ajouterChampion}
            />
          );
        })}
      </CardList>
      <CardList
        title={`Mon deck ${selectedChampions.length}/20`}
        isSplited={true}
        dark={true}
      >
        {selectedChampions.map((champion) => {
          return (
            <Card
              key={champion.id}
              isSplited={true}
              champion={champion}
              onClick={retirerChampion}
            />
          );
        })}
      </CardList>
    </div>
  );
};

export default PrepareDeckComponent;
