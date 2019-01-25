import React from "react";
import Card from "./components/Card";
import "./App.css";
import cards from "./img/cards";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Memory Game</h1>
      <div className="board">
        {cards.map((cardFront, i) => (
          <>
            <Card cardFront={cardFront} key={i} />
            <Card cardFront={cardFront} key={i} />
          </>
        ))}
      </div>
    </div>
  );
}
