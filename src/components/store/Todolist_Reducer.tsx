import {FilterValuesType, TodoListType} from "../App";
import {v1} from "uuid";

type ActionRMTDType = {type: 'Remove-TodoList', id: string,}
type ActionTDaddType = {type: 'AddedTodolist', title: string,}
type ActionChengeTDTitleType = {type: 'Change-Todolist-Title', title: string, id: string}
type ActionChangeFilterType = {type: 'Change-Todolist-Filter', filter: FilterValuesType, id: string}

export type ActionType = ActionRMTDType | ActionTDaddType | ActionChengeTDTitleType | ActionChangeFilterType

export const Todolist_Reducer =
    (todoList: Array<TodoListType>, action: ActionType): Array<TodoListType> => {

        switch (action.type) {
            case 'Remove-TodoList':
                return todoList.filter(f => f.id !== action.id)
            case 'AddedTodolist' :
                const ID = v1()
                const newTD: TodoListType = {id: ID, title: action.title, filter: 'all'}
                return [...todoList, newTD]
            case 'Change-Todolist-Title':
                return todoList.map(m => m.id === action.id ? {...m, title: action.title} : m)
            case 'Change-Todolist-Filter':
            return todoList.map(m => m.id === action.id ? {...m, filter: action.filter} : m)
            default:
                return todoList
        }
    }

    export const Remove_TD_AC = (id: string):ActionRMTDType => ({type: 'Remove-TodoList', id})
    export const Add_TD_AC = (title: string):ActionTDaddType => ({type: 'AddedTodolist', title})
    export const Chenge_TD_AC = (title: string, id: string):ActionChengeTDTitleType => ({type: 'Change-Todolist-Title', title, id})
    export const Filter_TD_AC = (filter: FilterValuesType, id: string):ActionChangeFilterType => ({type: 'Change-Todolist-Filter', filter, id})