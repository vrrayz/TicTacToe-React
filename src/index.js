import React from "react";
import ReactDOM from "react-dom";

import Tiles from "./components/Tiles";

import "./index.css";

let tileKey = 1;

const Board = () => {
  return (
    <div className="board">
      <Row />
      <Row />
      <Row />
    </div>
  );
};
const Row = () => {
  return (
    <div className="row">
      <Tiles id={tileKey++}/>
      <Tiles id={tileKey++}/>
      <Tiles id={tileKey++}/>
    </div>
  );
};

/**
 * 
 * X has 5 ticks to make max
 * O has 4 ticks to make max
 */

ReactDOM.render(<Board />, document.getElementById("root"));
