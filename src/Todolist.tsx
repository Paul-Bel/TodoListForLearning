import React from "react";
import {v1} from "uuid";

type DataProps = {
    id: string, title: string, isDone: boolean
}

type PropsTodolist = {
    tasks: Array<DataProps>
}


export const Todolist = (props: PropsTodolist) => {

    return(
        <div>
            <div>
                <h3>What to learn</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map(m=>{
                        return (
                            <li><input type="checkbox" checked={m.isDone}/> <span>{m.title}</span></li>
                        )
                    })}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>


        </div>
    )
}