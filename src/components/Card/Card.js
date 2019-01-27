import React from "react";
import PropTypes from "prop-types";
import back from "./CardBack.svg";
import "./Card.css";

export default function Card({ front, flip, onClick }) {
  return (
    <article
      className={
        "card " +
        (flip === FLIPPING || flip === FLIPPED ? "--flipped" : "") +
        (flip === UNFLIPPED ? "--unflip" : "")
      }
      onClick={onClick}
    >
      <div className="__front">
        <img src={front} alt="card front" />
      </div>

      <div className="__back">
        <img src={back} alt="card back" />
      </div>
    </article>
  );
}

Card.propTypes = {
  front: PropTypes.string.isRequired,
  flip: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export const IDLE = 0;
export const FLIPPING = 1;
export const FLIPPED = 2;
export const UNFLIPPED = 3;
