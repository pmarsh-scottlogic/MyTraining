import React from "react";
//import ReactDOM from "react-dom/client";
import { render } from "react-dom";
import "./index.css";
import Game from "./game.js";
import store from "./redux/store.js";
import { Provider } from "react-redux";

//const root = ReactDOM.client.createRoot(document.getElementById("root"));
const root = document.getElementById("root");
render(
    <React.StrictMode>
        <Provider store={store}>
            <Game />
        </Provider>
    </React.StrictMode>,
    root
);
