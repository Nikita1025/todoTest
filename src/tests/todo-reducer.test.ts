import {
  changeFilter,
  todoReducer,
  TodoSlice,
} from "../servies/slices/todoSlice";

let startState: TodoSlice = {
  filter: "all",
};
beforeEach(() => {
  startState = {
    filter: "all",
  };
});

test("filter should be changed", () => {
  const action = changeFilter({ filter: "completed" });

  const endState = todoReducer(startState, action);

  expect(endState.filter).toBe("completed");
});
