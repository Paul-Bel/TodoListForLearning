import React, {ChangeEvent, useCallback} from 'react';
import {FilterValuesType, TaskType} from "./App";
import {AddInformations} from "./AddInformations";
import {EditableSpan} from "./EditableSpan";
import {Button, ButtonGroup, Checkbox, IconButton, ListItem} from "@material-ui/core";
import s from './../Todolist.module.css'
import {Delete, DeleteForeverTwoTone} from "@material-ui/icons";
import {Task} from "./Task";

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string, todoListID: string) => void
    changeFilter: (filter: FilterValuesType, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    filter: FilterValuesType
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    removeTodolist: (todoListID: string) => void
    changeTaskTitle: (taskID: string, title: string, todoListID: string) => void
    changeTodolistTitle: (title: string, todoListID: string) => void
}

export const Todolist = React.memo((props: PropsType) => {
    console.log('TL')
    let tasksForTodolist = props.tasks;
    if (props.filter === "active") {
        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
    }
    if (props.filter === "completed") {
        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
    }


    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id)
    }, [props.addTask, props.id]);

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = (title: string) => {
        props.changeTodolistTitle(props.id, title);
    }
    const removeTaskC = useCallback((taskID: string) => {
        props.removeTask(taskID, props.id)
    },[props.removeTask, props.id] )
    const changeTaskStatus = useCallback((taskID: string, isDone: boolean)=>{
        props.changeTaskStatus(taskID, isDone, props.id)
    },[props.changeTaskStatus, props.id])
    const changeTaskTitle = useCallback((taskID: string, title: string)=>{
        props.changeTaskTitle(taskID, title, props.id)
    }, [props.changeTaskTitle, props.id])


    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);


    return <div>
        <h3> <EditableSpan value={props.title} onChange={changeTodolistTitle} />
            <IconButton onClick={removeTodolist}>
                <Delete />
            </IconButton>
        </h3>
        <AddInformations addItem={addTask}/>
        <div>
            {tasksForTodolist.map(t => {
                return <Task
                    key={t.id}
                    id={t.id}
                    tasks={t}
                    removeTask={removeTaskC}
                    changeTaskStatus={changeTaskStatus}
                    changeTaskTitle={changeTaskTitle}
                />
            })}
        </div>
        <div style={{ paddingTop: "10px"}}>
            <Button variant={props.filter === 'all' ? 'outlined' : 'text'}
                    onClick={onAllClickHandler}
                    color={'default'}
            >All
            </Button>
            <Button variant={props.filter === 'active' ? 'outlined' : 'text'}
                    onClick={onActiveClickHandler}
                    color={'primary'}>Active
            </Button>
            <Button variant={props.filter === 'completed' ? 'outlined' : 'text'}
                    onClick={onCompletedClickHandler}
                    color={'secondary'}>Completed
            </Button>
        </div>
    </div>
})


