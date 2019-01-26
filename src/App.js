import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";
import cards from "./img/cards";

export default function App() {
  const [cardPairs] = useState(
    [...cards, ...cards].sort(() => Math.round(Math.random()) * 2 - 1)
  );
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const $previousCard = selectedCards[0];
      const $currentCard = selectedCards[1];
      console.log($previousCard);

      if ($previousCard.cardID !== $currentCard.cardID) {
        console.log("Diferentes");
        selectedCards.map(el => el.classList.remove("--flipped"));
      } else {
        console.log("Iguais");
      }

      setSelectedCards([]);
    }
  });

  function handleSelect($card) {
    setSelectedCards([...selectedCards, $card]);
  }

  return (
    <div className="App">
      <h1 className="title">Memory Game</h1>
      <div className="board">
        {cardPairs.map((card, i) => (
          <Card
            cardFront={card.image}
            cardID={card.id}
            onSelect={handleSelect}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
