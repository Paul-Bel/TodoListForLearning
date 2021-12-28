import {TodoListType} from "../App";

type ActionTodolistType = {
    type: 'Remove-TodoList',
    id: string,
}

export const Todolist_Reducer =
    (todoList: Array<TodoListType>, action: ActionTodolistType): Array<TodoListType> => {

    switch (action.type){
        case 'Remove-TodoList':
        return todoList.filter(f => f.id !== action.id)
        default:
            return todoList
    }
}