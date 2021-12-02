import React, {ChangeEvent, KeyboardEvent, MouseEvent} from "react";


type DataProps = {
    id: string, title: string, isDone: boolean
}

type PropsTodolist = {
    TasksTodolist: Array<DataProps>
    setFilter: (info: 'All' | 'Active' | 'Completed') => void
    ChangeIsDone: (isDone: boolean, id: string) => void
    inputValue: string
    setInputValue: (e: string) => void
    addTask: (inputValue: string) => void
    DelTask: (id: string) => void
}

export const Todolist = ({setFilter, ...props}: PropsTodolist) => {

    const FilterAllHandler = () => setFilter('All')
    const FilterActiveHandler = () => setFilter('Active')
    const FilterCompletedHandler = () => setFilter('Completed')
    const FilterCheckBox = (isDone: boolean, id: string) => props.ChangeIsDone(isDone, id)
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => props.setInputValue(e.currentTarget.value)
    const onClickInput = () => props.addTask(props.inputValue)
    const KeyPress = (e: KeyboardEvent<HTMLInputElement>) => e.key == "Enter" ? props.addTask(props.inputValue) : ''
    const OnDelete = (id: string) => props.DelTask(id)
    // const OnDelete = (e: MouseEvent<HTMLButtonElement>) => props.DelTask(e.currentTarget.id)

    return (
        <div>
            <div>
                <h3>What to learn</h3>
                <div>
                    <input
                        value={props.inputValue}
                        onChange={onChangeInput}
                        onKeyPress={KeyPress}
                    />
                    <button onClick={onClickInput}>+</button>
                </div>
                <ul>
                    {props.TasksTodolist.map(m => {

                        return (
                            <li>
                                <button onClick={()=>OnDelete(m.id)}>X</button>
                                <input
                                    onChange={(e) => FilterCheckBox(e.currentTarget.checked, m.id)}
                                    type="checkbox"
                                    checked={m.isDone}/>
                                <span>{m.title}</span>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <button onClick={FilterAllHandler}>All</button>
                    <button onClick={FilterActiveHandler}>Active</button>
                    <button onClick={FilterCompletedHandler}>Completed</button>
                </div>
            </div>


        </div>
    )
}