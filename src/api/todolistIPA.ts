import axios, {AxiosResponse} from "axios";

type TodolistType = {
    id: string,
    title: string,
    addedDate: string,
    order: number,
}

type TodolistResponseType<T={}> = {
    "data": T,
    "messages": Array<string>,
    "fieldsErrors": Array<string>,
    "resultCode": number
}

const instance = axios.create({
    headers: {"api-key": "3c089002-10aa-48c7-80c6-fa863be7bb86"},
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
})

export const todolistIPA = {
    getTodolist() {
        return instance.get<Array<TodolistType>>('todo-lists')
    },
    createTodolist(title: string) {
        //типизированы: возвращаемый и принимаемый типы AxiosResponse
        return instance.post<TodolistResponseType<{ item: TodolistType }>,AxiosResponse<TodolistResponseType<{ item: TodolistType }>>, {title: string}>('todo-lists', {title})
    },
    deleteTodolist(id: string) {
        return instance.delete<TodolistResponseType>(`todo-lists/${id}`,)
    },
    updateTodolist(params: { id: string, title: string }) {
        return instance.put<TodolistResponseType>(`todo-lists/${params.id}`, {title: params.title})
    },
}
