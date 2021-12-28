import {v1} from "uuid";
import {TodoListType} from "../App";
import {Todolist_Reducer} from "./Todolist_Reducer";


test ('correct todolist should be removed', ()=>{
    let todoListID_1 = v1()
    let todoListID_2 = v1()

    const startState: Array<TodoListType> = [
        {id: todoListID_1, title: "What to learn", filter: 'all'},
        {id: todoListID_2, title: "What to by", filter: 'all'},
    ]

    const endState = Todolist_Reducer (startState, {type: 'Remove-TodoList', id: todoListID_1})

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todoListID_2)
})