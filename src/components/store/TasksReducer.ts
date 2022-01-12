import {TaskStateType} from "../App";
import {v1} from "uuid";
import {ActionRMTDType, ActionTDaddType} from "./Todolist_Reducer";

export type RemoveTaskACType = { type: 'RM_Task', TD_id: string, task_id: string }
export type AddActionType = { type: 'Add_Tasks', title: string, TD_id: string }
export type ChangeTaskStatusType = { type: 'ChangeStatus', TD_id: string, task_id: string, isDone: boolean }
export type ChangeTaskTitleType = { type: 'ChangeTaskTitle', TD_id: string, task_id: string, title: string }

export type ActionType = AddActionType
    | RemoveTaskACType
    | ChangeTaskStatusType
    | ChangeTaskTitleType
    | ActionTDaddType
    | ActionRMTDType
const initialState: TaskStateType = {}

export const tasksReducer =
    (state: TaskStateType = initialState, action: ActionType): TaskStateType => {

        switch (action.type) {
            case 'RM_Task':
                const copy = {...state}
                copy[action.TD_id] = copy[action.TD_id].filter(f => f.id !== action.task_id)
                return copy;
            case 'Add_Tasks' :
                const newTask = {id: v1(), title: action.title, isDone: false}
                const copy1 = {...state}
                copy1[action.TD_id] = [newTask, ...state[action.TD_id]]
                return copy1;
            case 'ChangeStatus' :
                const copyTasks = {...state}
                copyTasks[action.TD_id] = copyTasks[action.TD_id].map(m => m.id === action.task_id ? {
                    ...m,
                    isDone: action.isDone
                } : m)
                return copyTasks;
            case 'ChangeTaskTitle':
                const copyTask = {...state}
                copyTask[action.TD_id] = state[action.TD_id].map(m => m.id === action.task_id ? {
                    ...m,
                    title: action.title
                } : m)
                return copyTask
            case 'AddedTodolist':
                return {...state, [action.TD_ID]: []}
            case 'Remove-TodoList':
                let copyDela = {...state}
                delete copyDela[action.id]
                // alternative - let {[action.id] : [], ...newState} = {...state}
                // return newState
                return copyDela;

            default:
                return state
        }
    }

export const removeTaskAC = (task_id: string, TD_id: string): RemoveTaskACType => ({type: 'RM_Task', TD_id, task_id})
export const addTaskAC = (title: string, TD_id: string): AddActionType => ({type: 'Add_Tasks', title, TD_id})
export const changeTaskStatusAC = (task_id: string, isDone: boolean, TD_id: string): ChangeTaskStatusType => ({
    type: 'ChangeStatus',
    TD_id,
    task_id,
    isDone
})
export const changeTaskTitleAC = (task_id: string, title: string, TD_id: string): ChangeTaskTitleType => ({
    type: 'ChangeTaskTitle',
    TD_id,
    task_id,
    title
})