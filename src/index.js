import React from "react";
import ReactDOM from "react-dom";

import Row from "./components/Row";
import "./index.css";

const Board = () => {
  return (
    <div className="board">
      <Row />
      <Row />
      <Row />
    </div>
  );
};

/**
 *
 * X has 5 ticks to make max
 * O has 4 ticks to make max
 */

ReactDOM.render(<Board />, document.getElementById("root"));
