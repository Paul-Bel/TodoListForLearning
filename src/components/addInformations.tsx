import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddInformationsPropsType = {
    addItem: (value: string) => void
}

export const AddInformations = (props: AddInformationsPropsType) => {

    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const errorClass = error ? "error" : "";
    const errorMessage = <div style={{color: "red"}}>Title is required!</div>

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const onKeyPressAdd = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {addItem();}
    }
    const addItem = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addItem(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }

    return (
<div>
    <input
        value={title}
        onChange={changeTitle}
        onKeyPress={onKeyPressAdd}
        className={errorClass}

    />
    <button onClick={addItem}>+</button>
    {error && errorMessage}
</div>
    )
}