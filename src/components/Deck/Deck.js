import AngularFront from "./Angular.svg";
import ReactFront from "./React.svg";
import VueFront from "./Vue.svg";
import RiotFront from "./Riot.svg";
import MarkoFront from "./Marko.svg";
import BackboneFront from "./Backbone.svg";
import KnockoutFront from "./Knockout.svg";
import PolymerFront from "./Polymer.svg";

export default function Deck() {
  const cards = [
    { id: 0, flip: 0, front: AngularFront },
    { id: 1, flip: 0, front: ReactFront },
    { id: 2, flip: 0, front: VueFront },
    { id: 3, flip: 0, front: RiotFront },
    { id: 4, flip: 0, front: MarkoFront },
    { id: 5, flip: 0, front: BackboneFront },
    { id: 6, flip: 0, front: KnockoutFront },
    { id: 7, flip: 0, front: PolymerFront }
  ];

  const clone = cards.map(card => ({ ...card }));

  let shuffledCards = cards
    .concat(clone)
    .sort(() => Math.round(Math.random()) * 2 - 1);

  return shuffledCards;
}
