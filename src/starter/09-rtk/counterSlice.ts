import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

type counterStatus = "pending" | "active" | "inactive";

type CounterState = {
  count: number;
  status: counterStatus;
};

const initialState: CounterState = {
  count: 0,
  status: "pending",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
      state.status = "pending";
    },
    setStatus: (state, action: PayloadAction<counterStatus>) => {
      state.status = action.payload;
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement, reset, setStatus } = counterSlice.actions;
