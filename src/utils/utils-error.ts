import {ActionsType, setAppErrorAC, setAppStatusAC} from "../app/app-reducer";
import {Dispatch} from "redux";


export const holdServerNetworkError = (dispatch: Dispatch<ActionsType>, message: string) => {
    dispatch(setAppErrorAC(message))
    dispatch(setAppStatusAC('idle'))
}
export const handServerError = (dispatch: Dispatch<ActionsType>, message: string) => {
    dispatch(setAppStatusAC('failed'))
    dispatch(setAppErrorAC(message))
}