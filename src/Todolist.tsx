import React from "react";
import {v1} from "uuid";

type DataProps = {
    id: string, title: string, isDone: boolean
}

type PropsTodolist = {
    TasksTodolist: Array<DataProps>
    setFilter: (info: 'All' | 'Active' | 'Completed') => void
}


export const Todolist = (props: PropsTodolist) => {

    return (
        <div>
            <div>
                <h3>What to learn</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.TasksTodolist.map(m => {
                        return (
                            <li><input type="checkbox" checked={m.isDone}/> <span>{m.title}</span></li>
                        )
                    })}
                </ul>
                <div>
                    <button onClick={()=>props.setFilter('All')}>All</button>
                    <button onClick={()=>props.setFilter('Active')}>Active</button>
                    <button onClick={()=>props.setFilter('Completed')}>Completed</button>
                </div>
            </div>


        </div>
    )
}