import React from "react";
import Board from "./components/Board/Board";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Jogo da Memória</h1>
      <Board />
    </div>
  );
}
