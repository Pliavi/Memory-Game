import React from "react";
import cardBack from "./CardBack.svg";
import "./Card.css";

export default function Card(props) {
  function handleClick(e) {
    const $cardClasses = e.currentTarget.classList;

    if (!$cardClasses.contains("--flipped")) {
      $cardClasses.add("--flipped");
    }
  }

  return (
    <article className="card" onClick={handleClick}>
      <div className="__front">
        <img src={props.cardFront} alt="card front" />
      </div>

      <div className="__back">
        <img src={cardBack} alt="card back" />
      </div>
    </article>
  );
}
