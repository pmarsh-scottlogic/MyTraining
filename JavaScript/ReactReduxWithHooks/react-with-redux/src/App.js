import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
    const state = useSelector((state) => state); // this is the line we need to access the state from any react component :)
    const dispatch = useDispatch();

    const { depositMoney, withdrawMoney } = bindActionCreators(
        actionCreators,
        dispatch
    );

    return (
        <div className="App">
            <h1>{state.account}</h1>
            <button onClick={() => depositMoney(1)}>Deposit</button>
            <button onClick={() => withdrawMoney(1)}>Withdraw</button>
        </div>
    );
}

export default App;
