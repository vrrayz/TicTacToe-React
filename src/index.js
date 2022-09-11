import React from "react";
import ReactDOM from "react-dom";

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
      <Tiles/>
      <Tiles />
      <Tiles />
    </div>
  );
};
const Tiles = () => {
  return <div className="tiles">{tileKey++}</div>;
};

ReactDOM.render(<Board />, document.getElementById("root"));
