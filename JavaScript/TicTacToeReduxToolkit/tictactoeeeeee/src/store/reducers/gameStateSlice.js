import { createSlice } from "@reduxjs/toolkit";
import calculateWinner from "./calculateWinner";

export const gameStateSlice = createSlice({
    name: "game",
    initialState: {
        xIsNext: false,
        step: 0,
        winner: null,
        history: [Array(9).fill(null)],
    },
    reducers: {
        setStep: (state, action) => {
            state.step = action.payload;
            updateWinner(state);
        },

        makeMove: (state, action) => {
            const currentBoard = state.history[state.step];
            const move = state.xIsNext ? "X" : "O";
            const square = action.payload;
            const currentHistory = state.history.slice(0, state.step + 1);
            if (!currentBoard[square] && !state.winner) {
                const nextBoard = currentBoard.slice();
                nextBoard[square] = move;
                currentHistory.push(nextBoard);
                state.history = currentHistory;
                nextStep(state);
                swapPlayer(state);
                updateWinner(state);
            }
        },
    },
});

function swapPlayer(state) {
    state.xIsNext = !state.xIsNext;
}

function nextStep(state) {
    state.step++;
}

function updateWinner(state) {
    state.winner = calculateWinner(state.history[state.step]);
}

export const { setStep, makeMove } = gameStateSlice.actions;
export default gameStateSlice.reducer;
