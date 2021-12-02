import React, {useEffect, useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {Todolist} from "./Todolist";


type DataPropsApp = { id: string, title: string, isDone: boolean }
type info = 'All' | 'Active' | 'Completed'


function App() {

    const [tasks, setTasks] = useState([
        {id: v1(), title: 'React', isDone: false,},
        {id: v1(), title: 'HTML', isDone: true,},
        {id: v1(), title: 'CSS', isDone: false,},
        {id: v1(), title: 'Redax', isDone: true,},
        {id: v1(), title: 'React stirybook', isDone: false,},
    ])

    const [filter, setFilter] = useState('All')
    let TasksTodolist = tasks
    if (filter === 'Active') TasksTodolist = tasks.filter(f => f.isDone === false)
    if (filter === 'Completed') TasksTodolist = tasks.filter(f => f.isDone === true)
    if (filter === 'All') TasksTodolist = tasks

    const ChangeIsDone = (isDone: boolean, id: string) => {
        setTasks(tasks.map(m => m.id === id ? {...m, isDone: isDone} : m))
    }
//     const ChangeIsDone = (isDone: boolean, id: string) => {
// //         let Change = tasks.find(f => f.id === id)
// //         if (Change) {Change.isDone = isDone}
// //         setTasks([...tasks])
//     }  альтернативный Checkbox
    let [inputValue, setInputValue] = useState('')
    const addTask = (inputValue: string) => {
        if (inputValue.trim()){
            inputValue.trim()
        } else {return}
        let newT = {id: v1(), title: inputValue, isDone: false,}
        setTasks([newT, ...tasks])
        setInputValue('')
    }
    const DelTask = (id: string) => setTasks(tasks.filter(m=> m.id !== id))



    return (
        <div className="App">
            <Todolist
                TasksTodolist={TasksTodolist}
                setFilter={setFilter}
                ChangeIsDone={ChangeIsDone}
                inputValue={inputValue}
                setInputValue={setInputValue}
                addTask={addTask}
                DelTask={DelTask}
            />

        </div>
    );
}

export default App;
