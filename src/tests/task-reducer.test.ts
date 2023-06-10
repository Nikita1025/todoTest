import {
  addTaskAC,
  changeStatusAC,
  taskReducer,
  TaskType,
} from '../store/reducers/task-reducer';

let startState: TaskType[] = [];
beforeEach(() => {
  startState = [
    { id: '1', title: 'Front end', isDone: false },
    { id: '2', title: 'Js', isDone: false },
    { id: '3', title: 'React', isDone: false },
  ];
});

test('task should be add', () => {
  const action = addTaskAC('Back end');

  const endState = taskReducer(startState, action);

  expect(endState.length).toBe(4);
  expect(endState[0].id).toBeDefined();
  expect(endState[0].title).toBe('Back end');
  expect(endState[0].isDone).toBe(false);
});
test('status should be changed', () => {
  const action = changeStatusAC(true, '3');

  const endState = taskReducer(startState, action);

  expect(endState[2].title).toBe('React');
  expect(endState[2].isDone).toBe(true);
});
