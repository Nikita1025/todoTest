import React, {ChangeEvent, useState} from 'react';
import {Task} from "./task/Task";
import style from './Todo.module.css'
import {useDispatch} from "react-redux";
import {useAppSelector} from "../store/store";
import { changeFilterAC, FilterValuesType} from "../store/reducers/todo-reducer";
import {addTaskAC} from "../store/reducers/task-reducer";
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";
import {ReactComponent as Vector} from "../assets/images/vector.svg";

export const Todo = () => {
    const dispatch= useDispatch()
    let task=useAppSelector(state => state.task)
    const {filter}=useAppSelector(state => state.todo)

    let [title, setTitle] = useState("")

    const onChangeAddTask=(e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
    }
    const onClickChangeFilter=(value: FilterValuesType)=>{
        dispatch(changeFilterAC(value))
    }
    const onClickAddTask=()=>{
        dispatch(addTaskAC(title))
        setTitle('')
    }
    let tasksForTodolist = task

    if (filter === 'active') {
        tasksForTodolist = task.filter(t => t.isDone)
    }
    if (filter === 'completed') {
        tasksForTodolist = task.filter(t => !t.isDone)
    }
    const renderFilterButton = (buttonFilter: FilterValuesType,
                                text: string) => {
        return <Button variant={filter === buttonFilter ? 'contained' : 'text'}
                       onClick={() => onClickChangeFilter(buttonFilter)}
                       sx={{textTransform: 'none'}}
                       className={style.button}
        >{text}
        </Button>
    }

    return (
        <div className={style.container}>
            <div className={style.title_container}>
                <span className={style.title}>Todos</span>
            </div>
            <div className={style.container_tasks}>
                <div >
                    <div className={style.input_container}>
                        <TextField className={style.input} onChange={onChangeAddTask} value={title} label="What needs to be done?" variant="standard"/>
                        <Vector className={style.vector} onClick={onClickAddTask}/>
                    </div>
                    {tasksForTodolist.map(el=> {
                        return <Task key={el.id} title={el.title} id={el.id} isDone={el.isDone}/>
                    })}
                </div>
                <div className={style.button_container}>
                    {renderFilterButton('all',  'All')}
                    {renderFilterButton('active',  'Active')}
                    {renderFilterButton('completed', 'Completed')}
                </div>
            </div>

        </div>
    );
};

