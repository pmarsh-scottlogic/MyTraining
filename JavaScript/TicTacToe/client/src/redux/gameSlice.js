import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: "game",
    initialState: {
        xIsNext: true,
        stepNumber: 0,
    },
    reducers: {
        setXIsNext: (state, action) => {
            state.xIsNext = action.payload;
        },
        setStepNumber: (state, action) => {
            const step = action.payload;
            state.stepNumber = step;
            state.xIsNext = step % 2 === 0;
        },
    },
});

export const {} = gameSlice.actions;
export default gameSlice.reducer;
