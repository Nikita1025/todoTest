import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};
export type productsSlice = {
  tasks: TaskType[];
};

const initialState: productsSlice = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTask: (
      state: productsSlice,
      { payload }: PayloadAction<{ title: string }>
    ) => {
      state.tasks = [
        { id: v4(), title: payload.title, isDone: false },
        ...state.tasks,
      ];
    },
    changeStatusTask: (
      state: productsSlice,
      { payload }: PayloadAction<{ id: string; status: boolean }>
    ) => {
      state.tasks = state.tasks.map((el) =>
        el.id === payload.id ? { ...el, isDone: payload.status } : el
      );
    },
    deleteTasks: (state: productsSlice) => {
      state.tasks = [];
    },
    deleteTask: (
      state: productsSlice,
      { payload }: PayloadAction<{ id: string }>
    ) => {
      state.tasks = state.tasks.filter((el) => el.id !== payload.id);
    },
  },
});

export const { addTask, changeStatusTask, deleteTask, deleteTasks } =
  taskSlice.actions;
export const taskReducer = taskSlice.reducer;
