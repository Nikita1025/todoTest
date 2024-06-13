import React, { ChangeEvent, FC } from "react";
import s from "./Task.module.scss";
import { useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import { changeStatusTask, deleteTask } from "../../servies/slices/taskSlice";
import { DeleteIcon } from "../../assets/icons/deleteIcon";
type TaskType = {
  title: string;
  id: string;
  isDone: boolean;
};
export const Task = ({ title, id, isDone }: TaskType): JSX.Element => {
  const dispatch = useDispatch();
  const onChangeStatus = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeStatusTask({ id, status: e.currentTarget.checked }));
  };
  const onClickDeleteTask = () => {
    dispatch(deleteTask({ id }));
  };
  return (
    <div className={s.task_container}>
      <Checkbox checked={isDone} onChange={onChangeStatus} />
      <span className={s.title}>{title}</span>
      <DeleteIcon onClick={onClickDeleteTask} className={s.delete_icon} />
    </div>
  );
};
