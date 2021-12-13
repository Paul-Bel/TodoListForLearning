import React, {ChangeEvent, KeyboardEvent, MouseEvent, useState} from 'react';
import {FilterValuesType, TaskType} from "./App";
import s from './Todolist.module.css'
import {AddInformations} from "./components/AddInformations";
import {EditableSpan} from "./components/EditableSpan";

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string, todoListID: string) => void
    changeFilter: (filter: FilterValuesType, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    filter: FilterValuesType
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    removeTotoList: (todoListID: string) => void
    changeTaskTitle: (taskID: string, title: string, todoListID: string) => void
}


function TodoList(props: PropsType) {

    const addTask = (value: string) => {
            props.addTask(value, props.id)
    }

    const setAllFilterValue = () => props.changeFilter("all", props.id)
    const setActiveFilterValue = () => props.changeFilter("active", props.id)
    const setCompletedFilterValue = () => props.changeFilter("completed", props.id)
    const getBtnClass = (filter: FilterValuesType) => props.filter === filter ? "active" : "";



    const tasksJSX = props.tasks.map(task => {
        const getClasses = () => task.isDone ? "is-done" : "";
        const changeStatus = (e: ChangeEvent<HTMLInputElement>) =>
            props.changeTaskStatus(task.id, e.currentTarget.checked, props.id)
        const removeTask = () => props.removeTask(task.id, props.id)
        const changeTitle = (value: string) => {
            props.changeTaskTitle(task.id, value, props.id)
        }


        return (

            <li key={task.id} className={getClasses()}>
                <button onClick={removeTask}>x</button>
                <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={changeStatus}
                />
                <EditableSpan
                    title={task.title}
                    changeTitle={changeTitle}
                />
                {/*<span>{task.title}</span>*/}
            </li>
        )
    })

    return (
        <div className={s.border}>
            <button onClick={() => props.removeTotoList(props.id)}>X</button>
            <h3>{props.title}
            </h3>
            <div>
                <AddInformations addItem={addTask}/>
            </div>
            <ul>
                {tasksJSX}
            </ul>
            <div>
                <button
                    className={getBtnClass("all")}
                    onClick={setAllFilterValue}>All
                </button>
                <button
                    className={getBtnClass("active")}
                    onClick={setActiveFilterValue}>Active
                </button>
                <button
                    className={getBtnClass("completed")}
                    onClick={setCompletedFilterValue}>Completed
                </button>
            </div>
        </div>
    )
}

export default TodoList;