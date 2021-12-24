import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './../Todolist.module.css'
import {Backdrop, Button, IconButton, TextField} from "@material-ui/core";
import {AddCircleOutlineSharp, AddLocationSharp, Queue} from "@material-ui/icons";

type AddInformationsPropsType = {
    addItem: (value: string) => void
}

export const AddInformations = (props: AddInformationsPropsType) => {

    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const errorClass = error ? "error" : "";
    const errorMessage = <div style={{color: "darkred"}}>Title is required!</div>

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const onKeyPressAdd = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addItem();
        }
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
            <TextField
                value={title}
                onChange={changeTitle}
                onKeyPress={onKeyPressAdd}
                label={"enter your text"}
                variant={'standard'}
                size={'small'}
                color={'primary'}
                error={error}
                helperText={error && "Title is required"}
            />
            <IconButton onClick={addItem}>
          <Queue/>
            </IconButton>
        </div>
    )
}