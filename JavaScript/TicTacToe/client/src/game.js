import React, { useState } from "react";

import Board from "./board";
import calculateWinner from "./calculateWinner";

export default function Game(props) {
    // syntax for useState is
    // const [state, setState] = useState()

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepnumber] = useState(0);

    const jumpTo = function (step) {
        setStepnumber(step);
        setXIsNext(step % 2 === 0);
    };

    const handleClick = function (i) {
        const newHistory = history.slice(0, stepNumber + 1);
        const squares = newHistory[newHistory.length - 1].slice();
        // immutability of state is important for letting react know when to re-render, and it helps with undo functionailty

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = xIsNext ? "X" : "O";

        // setState causes state change, but also for react to rerender the component and all children
        setHistory(newHistory.concat([squares]));
        setXIsNext(!xIsNext);
        setStepnumber(newHistory.length);
    };

    const current = history[stepNumber];
    const winner = calculateWinner(current);

    const moves = history.map((boardState, i) => {
        const desc = i ? "Go to move #" + i : "Go to game start";
        return (
            <li key={i}>
                <button onClick={() => jumpTo(i)}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = "The weiner is " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={current} onClick={(i) => handleClick(i)} />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}
