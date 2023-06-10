import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {combineReducers, legacy_createStore } from 'redux';
import { todoReducer} from "./reducers/todo-reducer";
import {taskReducer} from "./reducers/task-reducer";


export const rootReducer = combineReducers({
    todo: todoReducer,
    task: taskReducer
});

export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
