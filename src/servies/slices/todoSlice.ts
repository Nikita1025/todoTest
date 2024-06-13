import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type FilterValuesType = "all" | "active" | "completed";
export type TodoSlice = {
  filter: FilterValuesType;
};

const initialState: TodoSlice = {
  filter: "all",
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    changeFilter: (
      state: TodoSlice,
      { payload }: PayloadAction<{ filter: FilterValuesType }>
    ) => {
      state.filter = payload.filter;
    },
  },
});

export const { changeFilter } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
