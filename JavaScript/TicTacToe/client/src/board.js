import React from "react";

import Square from "./square";

export default function Board(props) {
    const renderSquare = function (i) {
        // props are used for passing information from parents to children. It's the essence of information flow in react apps
        // adding props to a new component:
        // syntax: <ComponentName prop1 = {js value} prop2 = {js value} ...>
        return (
            <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
        );
    };

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}
