// in this file we set up the redux store

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice"; // This is a reducer that we've written elsewhere.

export default configureStore({
    reducer: {
        counter: counterReducer, // the reducer function for our counter logic
        // "we want the counter section of our global Redux state, and we wawnt it to be controlled by counterReducer"
    },
});
