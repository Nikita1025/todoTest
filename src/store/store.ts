// eslint-disable-next-line import/named
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers, legacy_createStore } from 'redux';

import { taskReducer } from './reducers/task-reducer';
import { todoReducer } from './reducers/todo-reducer';

export const rootReducer = combineReducers({
  todo: todoReducer,
  task: taskReducer,
});

export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
