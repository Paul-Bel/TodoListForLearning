import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";


function App() {
    const [OwntitleList, setTitleList] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: false},
        {id: v1(), title: "React", isDone: true},
        {id: v1(), title: "uuid", isDone: false},
        {id: v1(), title: "Todolist", isDone: true},
    ])

    const addTask = (event: string) => {
        let newT = {id: v1(), title: event, isDone: false}
        let title = [newT, ...titleList]
        setTitleList(title)
    }
    const deleteTask = (id: string) => {
        setTitleList(titleList.filter(f => f.id != id))

    }
    const onClickChange = (id: string, e: boolean) => {
        setTitleList(titleList.map(m => m.id === id ? {...m, isDone: e} : m))
    }
    const [filter, setFilter] = useState('All')


    let titleList = OwntitleList
    // const [title, setTatle] = useState('All')

    if (filter === 'Completed') {
        titleList = OwntitleList.filter(m => m.isDone === false)
    }
    if (filter === 'Active') {
        titleList = OwntitleList.filter(m => m.isDone === true)
    }
    if (filter === 'All') {
        titleList = OwntitleList
    }



    return (
        <Todolist
            titleList={titleList}
            addTask={addTask}
            deleteTask={deleteTask}
            onClickChange={onClickChange}
            setFilter={setFilter}
            filter={filter}
        />
    );
}

export default App;
