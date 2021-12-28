import {v1} from "uuid";
import {FilterValuesType, TodoListType} from "../App";
import {Todolist_Reducer, ActionType, Remove_TD_AC, Add_TD_AC, Chenge_TD_AC, Filter_TD_AC} from "./Todolist_Reducer";


test ('correct todolist should be removed', ()=>{
    let todoListID_1 = v1()
    let todoListID_2 = v1()

    const startState: Array<TodoListType> = [
        {id: todoListID_1, title: "What to learn", filter: 'all'},
        {id: todoListID_2, title: "What to by", filter: 'all'},
    ]

    const endState = Todolist_Reducer (startState, Remove_TD_AC(todoListID_1))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todoListID_2)
})

test ('correct todolist should be added', () => {
    let todoListID_1 = v1()
    let todoListID_2 = v1()

    const startState: Array<TodoListType> = [
        {id: todoListID_1, title: "What to learn", filter: 'all'},
        {id: todoListID_2, title: "What to by", filter: 'all'},
    ]
    let newTodolist = 'New Todolist'

    const endState = Todolist_Reducer(startState, Add_TD_AC(newTodolist))
    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(newTodolist)
})
test ('correct title todolist', () => {
    let todoListID_1 = v1()
    let todoListID_2 = v1()

    const startState: Array<TodoListType> = [
        {id: todoListID_1, title: "What to learn", filter: 'all'},
        {id: todoListID_2, title: "What to by", filter: 'all'},
    ]
    let todolistTitle = 'New Todolist'

    const endState = Todolist_Reducer(startState, Chenge_TD_AC(todolistTitle, todoListID_2))
    expect(endState[0].title).toBe("What to learn")
    expect(endState[1].title).toBe(todolistTitle)
})
test ('correct filter todolist', () => {
    let todoListID_1 = v1()
    let todoListID_2 = v1()

    const startState: Array<TodoListType> = [
        {id: todoListID_1, title: "What to learn", filter: 'all'},
        {id: todoListID_2, title: "What to by", filter: 'all'},
    ]
    let filterTodolist: FilterValuesType = 'active'

    const Action: ActionType = {type: 'Change-Todolist-Filter', filter: filterTodolist, id: todoListID_2}

    const endState = Todolist_Reducer(startState, Filter_TD_AC(filterTodolist, todoListID_2))
    expect(endState[1].filter).toBe("active")
    expect(endState[0].filter).toBe('all')
})
