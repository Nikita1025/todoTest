import {changeFilterAC, todoReducer, TodoType} from "../store/reducers/todo-reducer";

let startState: TodoType = {
    filter:'all'
};
beforeEach(() => {
    startState = {
        filter:'all'
    };
});

test('filter should be changed', () => {
    const action = changeFilterAC("completed");

    const endState = todoReducer(startState, action)

    expect(endState.filter).toBe('completed');
});
