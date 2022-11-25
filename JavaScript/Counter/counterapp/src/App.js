//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

// these are the reducers that we use to change the state!
import { increment, decrement } from "./reducers/counterSlice";

function App() {
    // useSelector hook allows us to access the state from the store, usong a selector function. The selector function takes the state and returns the desired property of the state.
    // Each call to useSelector creates a new subscription to the redux store.
    const count = useSelector((state) => state.counter.value);

    // Dispatch is a function. We call it with a reducer function as the argument to alter the state.
    const dispatch = useDispatch();

    return (
        <div className="App container mt-5 text-center">
            <h2 className="mb-3">
                React Js Redux Store with Slice State Example
            </h2>
            <p className="h1">{count}</p>
            <button
                onClick={() => {
                    dispatch(increment());
                }}
                className="me-2 btn btn-primary"
            >
                Increment
            </button>
            <button
                onClick={() => {
                    dispatch(decrement());
                }}
                className="me-2 btn btn-danger"
            >
                Decrement
            </button>
        </div>
    );
}
export default App;
