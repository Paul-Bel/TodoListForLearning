import {combineReducers, createStore} from 'redux';
import {Todolist_Reducer} from "./Todolist_Reducer";
import {tasksReducer} from "./TasksReducer";


const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: Todolist_Reducer,
})

export const store = createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;



