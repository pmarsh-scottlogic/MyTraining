// in this file we create a Redux Slice!
// A slice is a collection of reducer logic and actiouns for a single feature.
// We are splitting the Redux state into several "slices" of state

import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        // initial value of this state slice
        value: 0,
    },
    reducers: {
        // these are the reducer functions that alter this particular state slice!
        // recall: A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState
        // These reducers are called directly in the front end
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
    },
});
// export the reducers for use elsewhere
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
