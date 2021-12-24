

export type ActionType = {
    type: 'summ' | 'div' | 'mult' | 'sub',
    payload: number
}

export const multyReducer = (state: number, action: ActionType): number => {
    switch (action.type){
        case 'summ':
            return state + action.payload;
        case 'div':
            return state / action.payload;
         case 'mult':
            return state * action.payload;
         case 'sub':
            return state - action.payload;
        default: return state;
    }
}