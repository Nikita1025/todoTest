import {
  addTask,
  changeStatusTask,
  deleteTask,
  deleteTasks,
  productsSlice,
  taskReducer,
} from "../servies/slices/taskSlice";

let startState: productsSlice;
beforeEach(() => {
  startState = {
    tasks: [
      { id: "1", title: "Front end", isDone: false },
      { id: "2", title: "Js", isDone: false },
      { id: "3", title: "React", isDone: false },
    ],
  };
});

test("task should be add", () => {
  const action = addTask({ title: "Back end" });

  const endState = taskReducer(startState, action);

  expect(endState.tasks.length).toBe(4);
  expect(endState.tasks[0].id).toBeDefined();
  expect(endState.tasks[0].title).toBe("Back end");
  expect(endState.tasks[0].isDone).toBe(false);
});
test("status should be changed", () => {
  const action = changeStatusTask({ id: "3", status: true });

  const endState = taskReducer(startState, action);

  expect(endState.tasks[2].title).toBe("React");
  expect(endState.tasks[2].isDone).toBe(true);
});
test("tasks should be delete", () => {
  const action = deleteTasks();

  const endState = taskReducer(startState, action);
  expect(endState.tasks.length).toBe(0);
});
test("task should be delete", () => {
  const action = deleteTask({ id: "2" });

  const endState = taskReducer(startState, action);
  expect(endState.tasks.length).toBe(2);
  expect(endState.tasks[1].title).toBe("React");
  expect(endState.tasks[1].isDone).toBe(false);
});
