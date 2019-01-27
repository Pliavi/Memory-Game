import AngularFront from "./Angular.svg";
import ReactFront from "./React.svg";
import VueFront from "./Vue.svg";

export default function Deck() {
  const cards = [
    { id: 0, flip: 0, front: AngularFront },
    { id: 1, flip: 0, front: ReactFront },
    { id: 2, flip: 0, front: VueFront }
  ];

  const clone = cards.map(card => ({ ...card }));

  let shuffledCards = cards
    .concat(clone)
    .sort(() => Math.round(Math.random()) * 2 - 1);

  return shuffledCards;
}
