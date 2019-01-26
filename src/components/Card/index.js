import React from "react";
import cardBack from "./CardBack.svg";
import "./Card.css";

export default function Card({ onSelect, cardFront }) {
  function handleClick(e) {
    const $card = e.currentTarget;

    if (!$card.classList.contains("--flipped")) {
      $card.classList.add("--flipped");
    }

    onSelect($card);
  }

  return (
    <article className="card " onClick={handleClick}>
      <div className="__front">
        <img src={cardFront} alt="card front" />
      </div>

      <div className="__back">
        <img src={cardBack} alt="card back" />
      </div>
    </article>
  );
}
