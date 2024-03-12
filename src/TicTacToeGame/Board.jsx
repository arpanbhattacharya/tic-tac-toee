import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [turnForX, setTurnForX] = useState(true);

  function handleClick(index) {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = turnForX ? "X" : "O";
    setState(copyState);
    setTurnForX(!turnForX);
  }

  function checkWinner() {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 6],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  }

  const isWinner = checkWinner();

  function returnToGame() {
    setState(Array(9).fill(null));
  }

  return (
    <>
      {isWinner ? (
        <>
          <p>{isWinner} won the game 🎉</p>
          <button onClick={returnToGame} className="btn">
            Play again
          </button>
        </>
      ) : (
        <>
          <div className="board">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </>
  );
}
