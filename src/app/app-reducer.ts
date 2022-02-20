export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as null | string,
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionAppSetType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

export type ActionAppSetType = ActionAppSetDateType | ActionAppSetErrorType
export type ActionAppSetDateType = {type: 'APP/SET-STATUS', status: RequestStatusType}
export type ActionAppSetErrorType = {type: 'APP/SET-ERROR', error: string|null}
export const setAppStatusAC = (status: RequestStatusType): ActionAppSetDateType => ({type: 'APP/SET-STATUS', status})
export const setAppErrorAC = (error: string|null): ActionAppSetErrorType => ({type: 'APP/SET-ERROR', error})