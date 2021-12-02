import React, {useState} from 'react';
import { v1 } from 'uuid';
import './App.css';
import {Todolist} from "./Todolist";

type DataPropsApp = {id: string, title: string, isDone: boolean}

function App() {

    const [tasks, setTitle] = useState([
        {id: v1(), title: 'React', isDone: false,},
        {id: v1(), title: 'HTML', isDone: true,},
        {id: v1(), title: 'CSS', isDone: false,},
        {id: v1(), title: 'Redax', isDone: false,},
        {id: v1(), title: 'React stirybook', isDone: false,},
    ])




    return (
        <div className="App">
<Todolist tasks={tasks}/>

        </div>
    );
}

export default App;
