import React from 'react'

export default ({onEdit, onDelete, note, id}) => (
    <li className={"todoItem"}>
        <div>
            {/* <input className={"editInput"} value={note}/> */}
            <button className={"btn editBtn"} onClick={onEdit}><i class="fas fa-edit"></i></button>
            <span className={"todoItemText"}>{note}</span>
        </div>

        <button className={"btn deleteBtn"} onClick={onDelete}><i class="fas fa-trash-alt"></i></button>
    </li> 
)