import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {Todolist} from "./Todolist";

type DataPropsApp = { id: string, title: string, isDone: boolean }
type info = 'All' | 'Active' | 'Completed'


function App() {

    const [tasks, setTitle] = useState([
        {id: v1(), title: 'React', isDone: false,},
        {id: v1(), title: 'HTML', isDone: true,},
        {id: v1(), title: 'CSS', isDone: false,},
        {id: v1(), title: 'Redax', isDone: true,},
        {id: v1(), title: 'React stirybook', isDone: false,},
    ])
    const [filter, setFilter] = useState<info>('All')
    let TasksTodolist = tasks
    if (filter === 'Active') TasksTodolist = tasks.filter(f=> f.isDone === false)
    if (filter === 'Completed') TasksTodolist = tasks.filter(f=> f.isDone === true)
    if (filter === 'All') TasksTodolist = tasks






    return (
        <div className="App">
            <Todolist TasksTodolist={TasksTodolist} setFilter={setFilter}/>

        </div>
    );
}

export default App;
