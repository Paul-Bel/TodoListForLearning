import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import {TextField} from "@material-ui/core";
import s from './../Todolist.module.css'
type EditableSpanPropsType = {
    title: string
    changeTitle: (value: string) => void

}

export const EditableSpan = (props: EditableSpanPropsType) => {
    const [editMode, setEditMode] = useState(true)
    const [value, setValue] = useState(props.title)

    const onClick = () => setEditMode(true)
    const offClick = () => setEditMode(false)

    const inputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        if(value.trim()) {props.changeTitle(props.title)}
        else return
        props.changeTitle(value)
    }
    const onChangeInput = (e: KeyboardEvent<HTMLInputElement>) => {
        if(value.trim()) {props.changeTitle(props.title)}
        else return;
        if (e.key === 'Enter') {
            props.changeTitle(value)
            setEditMode(true)
        } else {
            return
        }
    }
//memo
    return (
        editMode ?
            <span
                className={s.title}
                onDoubleClick={offClick}>
                {props.title}
            </span> :
            <span>
            <TextField
                value={value}
                onKeyPress={onChangeInput}
                autoFocus={true}
                onBlur={onClick}
                onChange={inputValue}
                variant={'standard'}
            />
     </span>
    )
}
