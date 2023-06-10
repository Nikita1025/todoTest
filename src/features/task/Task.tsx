import React, { ChangeEvent, FC } from 'react';
import style from './Task.module.css';
import { useDispatch } from 'react-redux';
import { changeStatusAC } from '../../store/reducers/task-reducer';
import Checkbox from '@mui/material/Checkbox';
type TaskType = {
  title: string;
  id: string;
  isDone: boolean;
};
export const Task: FC<TaskType> = ({ title, id, isDone }): JSX.Element => {
  const dispatch = useDispatch();
  const onChangeStatus = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeStatusAC(e.currentTarget.checked, id));
  };
  return (
    <div className={style.task_container}>
      <Checkbox checked={isDone} onChange={onChangeStatus} />
      <span className={style.title}>{title}</span>
    </div>
  );
};
