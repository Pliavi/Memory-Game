import React, { useState, useEffect } from "react";
import shuffledDeck from "../Deck/Deck";
import Card, { FLIPPING, FLIPPED, UNFLIPPED } from "../Card/Card";
import "./Board.css";

export default function Board() {
  const [deck, setDeck] = useState(shuffledDeck());
  const [hand, setHand] = useState([]);
  const [won, setWon] = useState(false);

  function handleRestart() {
    deck.forEach(card => {
      window.setTimeout(() => {
        card.flip = UNFLIPPED;
        setDeck(deck);
      }, 500);
    });

    window.setTimeout(() => {
      setDeck(shuffledDeck());
      setHand([]);
      setWon(false);
    }, 1000);
  }

  function handleFlip(i) {
    const card = deck[i];

    if (hand.length === 2) return;
    if (card.flip === FLIPPING) return;

    if (card.flip !== FLIPPED || card.flip !== UNFLIPPED) {
      card.flip = FLIPPING;
      window.setTimeout(() => {
        card.flip = FLIPPED;
        setDeck(deck);
      }, 500);

      setDeck(deck);
      setHand([...hand, card]);
    }
  }

  useEffect(() => {
    if (hand.length === 2 && hand[1].flip === FLIPPED) {
      if (hand[0].id !== hand[1].id) {
        hand.forEach(card => (card.flip = UNFLIPPED));
      }
      setHand([]);
    }
  });

  useEffect(
    () => {
      setWon(deck.every(card => card.flip === FLIPPED));
    },
    [hand]
  );

  return (
    <>
      <div className="board">
        {deck.map((card, i) => (
          <Card {...card} key={i} onClick={() => handleFlip(i)} />
        ))}
      </div>
      <div className={"won " + (won ? "--show" : "")}>
        <h1>Você venceu!</h1>
        <button onClick={handleRestart}>Recomeçar</button>
      </div>
    </>
  );
}
