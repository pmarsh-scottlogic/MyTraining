import { useSelector, useDispatch } from "react-redux";
import { setStep } from "./store/reducers/gameStateSlice";
import Board from "./board";

export default function App(props) {
    const dispatch = useDispatch();
    const status = useSelector((state) => {
        return state.game.winner
            ? "the winner is " + state.game.winner
            : "next move: " + (state.game.xIsNext ? "X" : "O");
    });

    // const moves = history.map((boardState, i) => {
    //     const desc = i ? "Go to move #" + i : "Go to game start";
    //     return (
    //         <li key={i}>
    //             <button onClick={() => jumpTo(i)}>{desc}</button>
    //         </li>
    //     );
    // });

    const moves = useSelector((state) => {
        return state.game.history.map((boardState, i) => {
            const desc = i ? "Go to move #" + i : "Go to game start";
            return (
                <li key={i}>
                    <button onClick={() => dispatch(setStep(i))}>{desc}</button>
                </li>
            );
        });
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}
