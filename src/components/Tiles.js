import React from 'react'

let currentEntry = "X"
let timesPlayed = {
    "X": 0, "O": 0
  }
  let tilesPlayed = {
    "X" : [], "O" : []
  }
  const winningMoves = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9],
  ]
const Tiles = ({id}) => {
    const clickHandler = (e) => {
      
      if(e.target.innerText === ""){
        e.target.innerText = currentEntry
        changeEntry();
        recordMoves(e.target.innerText, id);
      }
    }
    return <div className="tiles" onClick={clickHandler}></div>;
};

const changeEntry = () => {
    if(currentEntry === "X") currentEntry = "O";
    else if(currentEntry === "O") currentEntry = "X";
}

const recordMoves = (entry, tileId) =>{  
  
    timesPlayed[entry]++;
  
    tilesPlayed[entry].push(tileId);
  
    // console.log(timesPlayed)
  
    checkMoves(entry)
  
    if(timesPlayed["X"] === 5 && timesPlayed["O"] === 4) {
        alert("Game ends in a draw")
        resetGame()
    };
  
  
  }
  const checkMoves = (entry) => {
    if(timesPlayed[entry] >= 3){
    // console.log(tilesPlayed)
  
      // Filter Through Winning Moves array to get the winning move
      let currentWinningMoves =  winningMoves.filter(x => {
        return x.every((item) => tilesPlayed[entry].indexOf(item) >= 0)
      })
      if(currentWinningMoves.length === 1){
        alert(entry + " wins this round");
        resetGame();
      }
    }
  }
  const resetGame = () => {

    currentEntry = "X";
    tilesPlayed.X = []; tilesPlayed.O = [];
    timesPlayed.X = timesPlayed.O = 0;
  
    let allTiles = document.getElementsByClassName("tiles");
    // console.log(allTiles)
    for (let index = 0; index < allTiles.length; index++) {
      // console.log(index)
      allTiles[index].innerText = "";
    }
  
  }

  export default Tiles
