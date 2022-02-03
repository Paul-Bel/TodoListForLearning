import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {todolistIPA} from "../api/todolistIPA";

export default {
    title: 'API'
}
const settings = {
    withCredentials: true,
    headers: {"api-key": "3c089002-10aa-48c7-80c6-fa863be7bb86"},
}
const URL = 'https://social-network.samuraijs.com/api/1.1/'

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistIPA.getTodolist()
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const title = "New list"
    useEffect(() => {
        todolistIPA.createTodolist(title)
            .then( (res) => {
        setState(res.data)
        } )

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const id = '358b110f-9ffa-4358-aa13-31d24762fe78'
    useEffect(() => {
       todolistIPA.deleteTodolist(id)
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const id = '358b110f-9ffa-4358-aa13-31d24762fe78'
    const title = '111111111111'
    useEffect(() => {
        todolistIPA.updateTodolist({id, title})
            .then(res => setState(res.data))
    }, [])


    return <div> {JSON.stringify(state)}</div>
}

