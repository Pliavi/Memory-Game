import React, { useState, useEffect } from "react";
import shuffledDeck from "../Deck/Deck";
import Card, { FLIPPING, FLIPPED, UNFLIPPED } from "../Card/Card";

export default function Board() {
  const [deck, setDeck] = useState(shuffledDeck());
  const [hand, setHand] = useState([]);

  function handleFlip(i) {
    const card = deck[i];

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
    if (hand.length === 2) {
      if (hand[1].flip === FLIPPED) {
        if (hand[0].id !== hand[1].id) {
          hand.forEach(card => (card.flip = UNFLIPPED));
        }
        setHand([]);
      }
    }
  });

  useEffect(
    () => {
      if (deck.every(card => card.flip)) {
        console.log("You won!");
      }
    },
    [hand]
  );

  return (
    <div className="board">
      {deck.map((card, i) => (
        <Card {...card} key={i} onClick={() => handleFlip(i)} />
      ))}
    </div>
  );
}
