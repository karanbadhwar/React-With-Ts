import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type taskState = {
  text: string;
  isChecked: boolean;
};

type checkedStatus = {
  index: number;
  checked: boolean;
};

const initialState: taskState[] = [];

export const upgradeStorage = (tasks: taskState[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.push({ text: action.payload, isChecked: false });
      upgradeStorage(state);
    },
    checkbox: (state, action: PayloadAction<checkedStatus>) => {
      state[action.payload.index].isChecked = action.payload.checked;
    },
  },
});

export default taskSlice.reducer;

export const { addTask, checkbox } = taskSlice.actions;
