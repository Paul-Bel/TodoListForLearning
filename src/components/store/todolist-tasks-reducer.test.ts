import {TaskStateType, TodoListType} from "../App";
import {Add_TD_AC, Remove_TD_AC, Todolist_Reducer} from "./Todolist_Reducer";
import {tasksReducer} from "./TasksReducer";

// let TaskStateType = TaskStateType

const startState: TaskStateType = {
    "todolistId1": [
        { id: "1", title: "CSS", isDone: false },
        { id: "2", title: "JS", isDone: true },
        { id: "3", title: "React", isDone: false }
    ],
    "todolistId2": [
        { id: "1", title: "bread", isDone: false },
        { id: "2", title: "milk", isDone: true },
        { id: "3", title: "tea", isDone: false }
    ]
};




test('id === id in tasks', () => {

    const startState: Array<TodoListType> = [    ]
    const startStateTask: TaskStateType = {    };

    const action = Add_TD_AC("new todolist");
    const endTask = tasksReducer(startStateTask, action)
    const endTD = Todolist_Reducer(startState, action)
    const keys = Object.keys(endTask);
    const idFromTasks = keys[0]
    const idFromTD = endTD[0].id

    // expect(endTask[endTD[2].id]).toBeDefined();
    expect(endTD[0].id).toBe(action.TD_ID);
    expect(idFromTasks).toBe(idFromTD);
});

test('new array should be added when new todolist is added', () => {
    const startState: TaskStateType = {
        "todolistId1": [
            { id: "1", title: "CSS", isDone: false },
            { id: "2", title: "JS", isDone: true },
            { id: "3", title: "React", isDone: false }
        ],
        "todolistId2": [
            { id: "1", title: "bread", isDone: false },
            { id: "2", title: "milk", isDone: true },
            { id: "3", title: "tea", isDone: false }
        ]
    };

    const action = Remove_TD_AC("todolistId2");
    const endState = tasksReducer(startState, action)
    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).not.toBeDefined();
});

