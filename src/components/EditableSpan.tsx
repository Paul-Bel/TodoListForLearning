import React, {useState, KeyboardEvent, ChangeEvent} from "react";

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
        props.changeTitle(value)
    }
    const onChangeInput = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.changeTitle(value)
        } else {
            return
        }
    }

    return (
        editMode ?
            <span
                onDoubleClick={offClick}>
                {props.title}
            </span> :

            <input
                value={value}
                onKeyPress={onChangeInput}
                autoFocus={true}
                onBlur={onClick}
                onChange={inputValue}
            />
    )
}

