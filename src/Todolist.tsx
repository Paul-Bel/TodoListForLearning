import React, {useState} from "react";
import './App.css'
import {KeyboardEvent} from "react";
import s from './Todolist.module.css'

type TitleType = {
    id: string,
    title: string,
    isDone: boolean,
}

type PropsTypeTD = {
    titleList: Array<TitleType>,
    addTask: (Event: string) => void
    deleteTask: (id: string) => void
    onClickChange: (id: string, e: boolean) => void
    setFilter: (info: string) => void
    filter: string
}


export function Todolist(props: PropsTypeTD) {

    const [Event, setEvent] = useState('')
    const [error, setError] = useState<null | string>(null)
    const onChangeButton = (value: string) => {
        setEvent(value)
    }

    const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            onButtunAdd(Event);
        }
    }
    const onButtunAdd = (Event: string) => {
        if (Event.trim() === "" ) {return setError("Where name?")}
        else {}
            props.addTask(Event.trim());
            setEvent('')
            }

    return (
        <div className="App">
            <div className={s.border}>
                <h3><button>X</button>   What to learn</h3>
                <div>
                    <input
                        className={error ? s.errorMessage : ''}
                        value={Event}
                        onKeyPress={onKey}
                        onChange={(e) => onChangeButton(e.currentTarget.value)}/>
                    <button onClick={(e) => onButtunAdd(Event)}>+</button>
                    {error ? <div className={s.errorMessage}>{error}</div> : ''}
                </div>
                <ul>
                    {props.titleList.map(m => {
                        return (<li key={m.id}>
                            <button onClick={() => props.deleteTask(m.id)}>X</button>
                            <input
                                onChange={(e) => props.onClickChange(m.id, e.currentTarget.checked)}
                                type="checkbox" checked={m.isDone}/>
                            <span className={m.isDone === true ? s.isDone : '' }>{m.title}</span>
                        </li>)
                    })}

                </ul>
                <div>

                    <button className={(props.filter==='All') ? s.activeFilter : ''} onClick={() => props.setFilter('All')}>All</button>
                    <button className={props.filter==='Active' ? s.activeFilter : ''}onClick={() => props.setFilter('Active')}>Active</button>
                    <button className={(props.filter==='Completed') ? s.activeFilter : ''}onClick={() => props.setFilter('Completed')}>Completed</button>

                </div>
            </div>
        </div>

    );


}

