import {setAppErrorAC, setAppStatusAC} from "../app/app-reducer";
import {Dispatch} from "redux";
import {ActionsType} from "../features/TodolistsList/tasks-reducer";


export const holdServerNetworkError = (dispatch: Dispatch<ActionsType>, message: string) => {
    dispatch(setAppErrorAC(message))
    dispatch(setAppStatusAC('idle'))
}
export const handServerError = (dispatch: Dispatch<ActionsType>, message: string) => {
    dispatch(setAppStatusAC('failed'))
    dispatch(setAppErrorAC(message))
}