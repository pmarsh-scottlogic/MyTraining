import React from "react";
//import ReactDOM from "react-dom/client";
import { render } from "react-dom";
import "./index.css";
import Game from "./game.js";

// ========================================

//const root = ReactDOM.client.createRoot(document.getElementById("root"));
const root = document.getElementById("root");
render(<Game />, root);
