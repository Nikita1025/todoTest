import React, { ChangeEvent, useState } from "react";
import { Task } from "./task/Task";
import s from "./Todo.module.scss";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { VectorIcon } from "../assets/icons/vectorIcon";
import { useAppDispatch, useAppSelector } from "../servies/hooks";
import { changeFilter, FilterValuesType } from "../servies/slices/todoSlice";
import { addTask, deleteTasks } from "../servies/slices/taskSlice";

export const Todo = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.taskReducer);
  const { filter } = useAppSelector((state) => state.todoReducer);

  const [title, setTitle] = useState("");

  const onChangeAddTask = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };
  const onClickChangeFilter = (value: FilterValuesType): void => {
    dispatch(changeFilter({ filter: value }));
  };
  const onClickDeleteTasks = () => {
    dispatch(deleteTasks());
  };
  const onClickAddTask = (): void => {
    if (title !== "") {
      dispatch(addTask({ title }));
      setTitle("");
    }
  };
  let tasksForTodolist = tasks;
  let tasksForTodolistCompleted = tasksForTodolist.filter((el) => !el.isDone);

  if (filter === "active") {
    tasksForTodolist = tasks.filter((t) => t.isDone);
  }
  if (filter === "completed") {
    tasksForTodolist = tasks.filter((t) => !t.isDone);
  }
  const renderFilterButton = (
    buttonFilter: FilterValuesType,
    text: string
  ): JSX.Element => {
    return (
      <Button
        variant={filter === buttonFilter ? "contained" : "text"}
        onClick={() => onClickChangeFilter(buttonFilter)}
        sx={{ textTransform: "none" }}
        className={s.button}
      >
        {text}
      </Button>
    );
  };

  return (
    <div className={s.container}>
      <div className={s.title_container}>
        <span className={s.title}>Todos</span>
      </div>
      <div className={s.container_tasks}>
        <div className={s.input_container}>
          <TextField
            className={s.input}
            onChange={onChangeAddTask}
            value={title}
            label="What needs to be done?"
            variant="standard"
          />
          <VectorIcon className={s.vector} onClick={onClickAddTask} />
        </div>
        {tasksForTodolist.map((el) => {
          return (
            <Task key={el.id} title={el.title} id={el.id} isDone={el.isDone} />
          );
        })}
        <div className={s.button_container}>
          <p onClick={s.items}>
            {tasksForTodolistCompleted.length}&nbsp;
            {tasksForTodolistCompleted.length <= 1 ? "item" : "items"} left
          </p>
          <div className={s.buttons_group}>
            {renderFilterButton("all", "All")}
            {renderFilterButton("active", "Active")}
            {renderFilterButton("completed", "Completed")}
          </div>
          <Button
            onClick={onClickDeleteTasks}
            sx={{ textTransform: "none" }}
            variant={"text"}
          >
            Clear all
          </Button>
        </div>
      </div>
    </div>
  );
};
