import React from 'react'
import Tiles from './Tiles';
let tileKey = 1;

const Row = () => {
    return (
      <div className="row">
        <Tiles id={tileKey++}/>
        <Tiles id={tileKey++}/>
        <Tiles id={tileKey++}/>
      </div>
    );
  };

  export default Row