import React, {ChangeEvent} from 'react';
import {FilterValuesType, TaskType} from "./App";
import {AddInformations} from "./AddInformations";
import {EditableSpan} from "./EditableSpan";
import {Button, ButtonGroup, Checkbox, IconButton, ListItem} from "@material-ui/core";
import s from './../Todolist.module.css'
import {Delete, DeleteForeverTwoTone} from "@material-ui/icons";

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

    const tasksJSX = props.tasks.map(task => {
        const changeStatus = (e: ChangeEvent<HTMLInputElement>) =>
            props.changeTaskStatus(task.id, e.currentTarget.checked, props.id)
        const removeTask = () => props.removeTask(task.id, props.id)
        const changeTitle = (value: string) => {
            props.changeTaskTitle(task.id, value, props.id)
        }

        const Span = React.memo(EditableSpan)
        return (
//memo
            <ListItem
                key={task.id}
                className={s.task}
            >
                <div className={s.tasksDIV}>
                    <Checkbox
                        checked={task.isDone}
                        onChange={changeStatus}
                    />
                    <Span
                        title={task.title}
                        changeTitle={changeTitle}
                    />
                </div>

                <IconButton onClick={removeTask} className={s.icon}>
                    <DeleteForeverTwoTone/>
                </IconButton>

            </ListItem>

        )
    })
    const changeTDTitle = (value: string) => {
        props.changeTitleTD(value, props.id)
        console.log(value)
    }
    return (
        <div>

            <h3>
                <IconButton
                    color={'primary'}
                    onClick={() => props.removeTotoList(props.id)}
                >
                    <Delete/>
                </IconButton>

                <EditableSpan title={props.title} changeTitle={changeTDTitle}/>

            </h3>
            <div>
                <AddInformations addItem={addTask}/>
            </div>


            <ul className={s.tasks}>
                {tasksJSX}
            </ul>
            <div>
                <ButtonGroup
                    variant={"contained"}
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