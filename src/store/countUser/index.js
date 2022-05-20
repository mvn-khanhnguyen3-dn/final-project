import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "countUser",
  initialState: {
    value: 0,
  },
  reducers: {
    counter: (state) => {
      state.value += 1;
    },
  },
});

export const { counter } = counterSlice.actions;

export default counterSlice.reducer;
