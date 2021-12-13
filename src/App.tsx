import React, {useState} from 'react';
import './App.css';
import TodoList from "./Todolist";
import {v1} from "uuid";
import {AddInformations} from "./components/AddInformations";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterValuesType = "all" | "active" | "completed"

type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}
type TaskStateType = {
    [key: string]: TaskType[]
}
function App() {
    const todoListID_1 = v1()
    const todoListID_2 = v1()
    const [todoList, setTodoList] = useState<Array<TodoListType>>([
        {id: todoListID_1, title: "What to learn", filter: 'all'},
        {id: todoListID_2, title: "What to by", filter: 'all'},
    ])
    const [tasks, setTasks] = useState<TaskStateType>({
        [todoListID_1]: [
            {id: v1(), title: "HTML", isDone: true},
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "REACT", isDone: false},
        ],
        [todoListID_2]: [
            {id: v1(), title: "HTML", isDone: true},
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "REACT", isDone: false},
        ]
    })

    //BLL:
    const changeFilter = (filter: FilterValuesType, todoListID: string) => {
        const filt = todoList.map(m => m.id === todoListID ? {...m, filter} : m)
        setTodoList(filt)
    }
    const changeTitleTD = (title: string, todoListID: string) => {
        const filt = todoList.map(m => m.id === todoListID ? {...m, title} : m)
        setTodoList(filt)
    }


    const removeTask = (taskID: string, todoListID: string) => {
        const copy = {...tasks}
        copy[todoListID] = tasks[todoListID].filter(f => f.id !== taskID)
        setTasks(copy)
    }
    const addTask = (newTaskTitle: string, todoListID: string) => {
        const newTask: TaskType = {id: v1(), title: newTaskTitle, isDone: false}
        const copy = {...tasks}
        copy[todoListID] = [newTask, ...tasks[todoListID]]
        setTasks(copy)
    }
    const changeTaskStatus = (taskID: string, isDone: boolean, todoListID: string) => {
        const copyTasks = {...tasks}
        copyTasks[todoListID] = tasks[todoListID].map(m => m.id === taskID ? {...m, isDone} : m)
        setTasks(copyTasks)
    }
        const changeTaskTitle = (taskID: string, title: string, todoListID: string) => {
        const copyTasks = {...tasks}
        copyTasks[todoListID] = tasks[todoListID].map(m => m.id === taskID ? {...m, title} : m)
        setTasks(copyTasks)
    }




    const removeTotoList = (todoListID: string) => {
        setTodoList(todoList.filter(f => f.id !== todoListID))
    }
    const addTodo = (title: string) => {
        const ID = v1()
        const newTD: TodoListType = {id: ID, title: title, filter: 'all'}
        setTodoList([...todoList, newTD])
        setTasks({...tasks, [newTD.id]: []})
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
            <TodoList
                key={m.id}
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
            />
        )
    })

    //UI:
    return (
        <div className="App">
            <AddInformations addItem={addTodo}/>
            {todolistComponents}
        </div>
    );
}

export default App;
