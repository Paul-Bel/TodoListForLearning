export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionAppSetType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

export type ActionAppSetType = {type: 'APP/SET-STATUS', status: RequestStatusType}
export const setAppStatusAC = (status: RequestStatusType): ActionAppSetType => ({type: 'APP/SET-STATUS', status})
// export const setAppStatusAC_I = (): ActionAppSetType => ({type: 'APP/SET-STATUS', status: 'idle'})