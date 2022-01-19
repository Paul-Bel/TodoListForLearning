import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import {TextField} from "@material-ui/core";
import s from './../Todolist.module.css'
type EditableSpanPropsType = {
    value: string
    onChange: (value: string) => void

}

export const EditableSpan = (props: EditableSpanPropsType) => {
    const [editMode, setEditMode] = useState(true)
    const [value, setValue] = useState(props.value)

    const onClick = () => setEditMode(true)
    const offClick = () => setEditMode(false)

    const inputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        if(value.trim()) {props.onChange(props.value)}
        else return
        props.onChange(value)
    }
    const onChangeInput = (e: KeyboardEvent<HTMLInputElement>) => {
        if(value.trim()) {props.onChange(props.value)}
        else return;
        if (e.key === 'Enter') {
            props.onChange(value)
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
                {props.value}
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

