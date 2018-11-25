import React from 'react'
export default ({onSubmitForm, onChangeText, text}) => (
    <form onSubmit={onSubmitForm} className={"todo_add_container"}>
        <input
            className={"todo_input"} 
            onChange={onChangeText} 
            value={text}
        />
        <button className={"cta"} type={"submit"}>Add</button>
    </form>
)