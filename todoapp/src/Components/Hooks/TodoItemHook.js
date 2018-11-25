import React, { useState } from 'react'

export default ({onDelete, text}) => {
    let [note, setNote] = useState(text)
    let [isEdit, setIsEdit] = useState(false)
    
    function onSubmitEdit(e) {
        e.preventDefault()
        setNote(note)
        setIsEdit(false)
    }

    function onTextChange(e) {
        setNote(e.target.value)
    }

    return (
        <li className={"todoItem"}>
            <form onSubmit={onSubmitEdit}>
                <button className={"btn editBtn"} type={"button"} onClick={() => setIsEdit(true)}>
                    <i class="fas fa-edit"></i>
                </button>
                {
                    isEdit
                    ? <input className={"editInput"} onChange={onTextChange} value={note}/>
                    : <span className={"todoItemText"}>{note}</span>

                }
            </form>

            <button className={"btn deleteBtn"} onClick={onDelete}>
                <i class="fas fa-trash-alt"></i>
            </button>
        </li> 
    )
}