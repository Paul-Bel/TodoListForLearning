import React, {useReducer, useState} from 'react';
import '../App.css';
import TodoList from "./Todolist";
import {v1} from "uuid";
import {AddInformations} from "./AddInformations";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {Add_TD_AC, Chenge_TD_AC, Filter_TD_AC, Remove_TD_AC, Todolist_Reducer} from "./store/Todolist_Reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./store/TasksReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "./store/store";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterValuesType = "all" | "active" | "completed"
export type TodoListType = { id: string, title: string, filter: FilterValuesType }
export type TaskStateType = { [key: string]: TaskType[] }

function AppWithRedux() {
    const dispatch = useDispatch()
    const todoListID_1 = v1()
    const todoListID_2 = v1()

    const todoList = useSelector<AppRootStateType, Array<TodoListType>>(state => state.todolists)

    // const [todoList, dispatchTodoList] = useReducer(Todolist_Reducer, [
    //     {id: todoListID_1, title: "What to learn", filter: 'all'},
    //     {id: todoListID_2, title: "What to by", filter: 'all'},
    // ])

    const tasks = useSelector<AppRootStateType, TaskStateType>(stat => stat.tasks)
    // const [tasks, dispatchTasks] = useReducer(tasksReducer, {
    //     [todoListID_1]: [
    //         {id: v1(), title: "HTML", isDone: false},
    //         {id: v1(), title: "CSS", isDone: true},
    //         {id: v1(), title: "REACT", isDone: false},
    //     ],
    //     [todoListID_2]: [
    //         {id: v1(), title: "Bread", isDone: true},
    //         {id: v1(), title: "Milk", isDone: false},
    //         {id: v1(), title: "Coffee", isDone: false},
    //     ]
    // })

    //BLL:
    const changeFilter = (filter: FilterValuesType, todoListID: string) => {
        dispatch(Filter_TD_AC(filter, todoListID))
        // const filt = todoList.map(m => m.id === todoListID ? {...m, filter} : m)
        // setTodoList(filt)
    }
    const changeTitleTD = (title: string, todoListID: string) => {
        dispatch(Chenge_TD_AC(title, todoListID))
        // const filt = todoList.map(m => m.id === todoListID ? {...m, title} : m)
        // setTodoList(filt)
    }

    const removeTask = (taskID: string, todoListID: string) => {
        dispatch(removeTaskAC(taskID, todoListID))


        // const copy = {...tasks}
        // copy[todoListID] = tasks[todoListID].filter(f => f.id !== taskID)
        // setTasks(copy)
    }
    const addTask = (newTaskTitle: string, todoListID: string) => {
        dispatch(addTaskAC(newTaskTitle, todoListID))


        // const newTask: TaskType = {id: v1(), title: newTaskTitle, isDone: false}
        // const copy = {...tasks}
        // copy[todoListID] = [newTask, ...tasks[todoListID]]
        // setTasks(copy)
    }
    const changeTaskStatus = (taskID: string, isDone: boolean, todoListID: string) => {
        // const copyTasks = {...tasks}
        // copyTasks[todoListID] = tasks[todoListID].map(m => m.id === taskID ? {...m, isDone} : m)
        // setTasks(copyTasks)
        dispatch(changeTaskStatusAC(taskID, isDone, todoListID))

    }
    const changeTaskTitle = (taskID: string, title: string, todoListID: string) => {
        dispatch(changeTaskTitleAC(taskID, title, todoListID))
        // const copyTasks = {...tasks}
        // copyTasks[todoListID] = tasks[todoListID].map(m => m.id === taskID ? {...m, title} : m)
        // setTasks(copyTasks)
    }
    const removeTotoList = (todoListID: string) => {
        let action = Remove_TD_AC(todoListID)
        dispatch(action)
        // setTodoList(todoList.filter(f => f.id !== todoListID))
    }
    const addTodo = (title: string) => {
        let action = Add_TD_AC(title)
        dispatch(action)

        // const ID = v1()
        // const newTD: TodoListType = {id: ID, title: title, filter: 'all'}
        // setTodoList([...todoList, newTD])
        // setTasks({...tasks, [newTD.id]: []})
    }
    const todolistComponents = todoList.map(m => {
        let tasksForRender = tasks[m.id]
        if (m.filter === "active") {
            tasksForRender = tasksForRender.filter(t => !t.isDone)
        }
        if (m.filter === "completed") {
            tasksForRender = tasksForRender.filter(t => t.isDone)
        }
        return (
            <Grid
                key={m.id}
                item
            >
                <Paper
                    elevation={7}
                    style={{padding: "20px"}}
                    // className={s.border}
                >
                    <TodoList
                        id={m.id}
                        title={m.title}
                        tasks={tasksForRender}
                        filter={m.filter}
                        addTask={addTask}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        changeTaskStatus={changeTaskStatus}
                        removeTotoList={removeTotoList}
                        changeTaskTitle={changeTaskTitle}
                        changeTitleTD={changeTitleTD}
                    />
                </Paper>
            </Grid>
        )
    })

    //UI:
    return (
        <div className="App">

            <AppBar position="static">
                <Toolbar
                    style={{justifyContent: "space-between"}}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Todolists
                    </Typography>
                    <Button color="secondary" variant={"outlined"}>Login</Button>
                </Toolbar>
            </AppBar>

            <Container
                fixed
            >
                <Grid
                    container
                    style={{padding: '20px'}}
                >

                    <AddInformations addItem={addTodo}/>
                </Grid>

                <Grid
                    style={{width: '1280px'}}
                    container
                    spacing={3}
                >
                    {todolistComponents}
                </Grid>

            </Container>
        </div>
    );
}

export default AppWithRedux;
