import { configureStore } from "@reduxjs/toolkit";
import taskSliceReducer from "./starter/10-tasks/slice";

export const store = configureStore({
  reducer: {
    task: taskSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDipatch = typeof store.dispatch;
