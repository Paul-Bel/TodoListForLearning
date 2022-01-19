import React, {ChangeEvent, useCallback} from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {TaskType} from "./App";

type TaskPropsType = {
    id: string
    tasks: TaskType
    removeTask: (taskID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
    changeTaskTitle: (taskID: string, title: string) => void
}

export const Task = React.memo(({id, tasks, removeTask, changeTaskStatus, changeTaskTitle}: TaskPropsType) => {
    const onClickHandler = useCallback(() => {
        removeTask(id)
    }, [id])
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        changeTaskStatus(id, newIsDoneValue);
    }
    const onTitleChangeHandler = useCallback((newValue: string) => {
        changeTaskTitle(id, newValue);
    }, [changeTaskTitle, id])


    return <>

        return <div key={id} className={tasks.isDone ? "is-done" : ""}>
        <Checkbox
            checked={tasks.isDone}
            color="primary"
            onChange={onChangeHandler}
        />

        <EditableSpan value={tasks.title} onChange={onTitleChangeHandler}/>
        <IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </div>

    </>
})