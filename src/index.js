import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

let tileKey = 1;
let currentEntry = "X"

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
      <Tiles key={tileKey++}/>
      <Tiles key={tileKey++}/>
      <Tiles key={tileKey++}/>
    </div>
  );
};
const Tiles = () => {
  const clickHandler = (e) => {
    if(e.target.innerText == ""){
      e.target.innerText = currentEntry
      changeEntry();
    }
  }
  return <div className="tiles" onClick={clickHandler}></div>;
};

const changeEntry = () => {
  if(currentEntry == "X") currentEntry = "O";
  else if(currentEntry == "O") currentEntry = "X";
}

ReactDOM.render(<Board />, document.getElementById("root"));
