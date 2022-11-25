import { configureStore } from "@reduxjs/toolkit";
import gameStateReducer from "./reducers/gameStateSlice";

export default configureStore({
    reducer: {
        game: gameStateReducer,
    },
});
