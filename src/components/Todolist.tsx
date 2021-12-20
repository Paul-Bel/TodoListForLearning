import React, {ChangeEvent} from 'react';
import {FilterValuesType, TaskType} from "./App";
import {AddInformations} from "./AddInformations";
import {EditableSpan} from "./EditableSpan";
import {Button, ButtonGroup} from "@material-ui/core";
import s from './../Todolist.module.css'

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
    changeTitleTD: (title: string, todoListID: string) => void
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
            </li>
        )
    })
    const changeTDTitle = (value: string) => {
        props.changeTitleTD(value, props.id)
        console.log(value)
    }
    return (
        <div className={s.border}>
            <button onClick={() => props.removeTotoList(props.id)}>X</button>
            <h3>
                <EditableSpan title={props.title} changeTitle={changeTDTitle}/>
            </h3>
            <div>
                <AddInformations addItem={addTask}/>
            </div>
            <ul>
                {tasksJSX}
            </ul>
            <div>
                <ButtonGroup
                    variant={"outlined"}
                    size={"small"}
                    disableElevation

                >
                    <Button
                        color={props.filter === "all" ? "secondary" : "primary"}
                        onClick={setAllFilterValue}
                        className={s.buttons}
                    >All
                    </Button>
                    <Button
                        color={props.filter === "active" ? "secondary" : "primary"}
                        onClick={setActiveFilterValue}
                        className={s.buttons}
                    >Active
                    </Button>
                    <Button
                        color={props.filter === "completed" ? "secondary" : "primary"}
                        onClick={setCompletedFilterValue}
                    >Completed
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default TodoList;