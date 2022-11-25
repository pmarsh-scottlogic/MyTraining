import { useSelector, useDispatch } from "react-redux";
import { makeMove } from "./store/reducers/gameStateSlice";

export default function Square(props) {
    const dispatch = useDispatch();
    const value = useSelector(
        (state) => state.game.history[state.game.step][props.index]
    );
    return (
        <button
            className="square"
            onClick={() => dispatch(makeMove(props.index))}
        >
            {value}
        </button>
    );
}
