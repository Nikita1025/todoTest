import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./slices/taskSlice";
import { todoReducer } from "./slices/todoSlice";

export const store = configureStore({
  reducer: {
    taskReducer,
    todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
