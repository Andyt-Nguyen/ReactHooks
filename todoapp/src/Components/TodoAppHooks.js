import React, { useState, useEffect } from 'react'
import Form from './Form'
import TodoItem from './TodoItem'

export default () => {
    let [todos, setTodos] = useState([
        {id:1, note: "Buy Milk"},
        {id:2, note: "Walk Bently"},
        {id:3, note: "Study C++"},
        {id:4, note: "Study Java"}]);
    
    let [itemCounter, setItemCounter] = useState(0)
    let [textInput, setTextInput] = useState('')

    function onChangeText(e) {
        setTextInput(e.target.value)
    }

    function onDelete(id) {
        let newItems = todos.filter( b => b.id !== id)
        setTodos(newItems)
    }

    function renderTodos() {
        return todos.map( (a, index) => (
            <TodoItem 
                key={a.id}
                id={a.id} 
                note={a.note}
                onDelete={() => onDelete(a.id)}
            />
            )
        )
    }

    function onSubmitForm(e) {
        e.preventDefault()
        let todoList = [...todos, {id:todos.length, note:textInput}]
        setTodos(todoList)
    }

    useEffect(() => setItemCounter(todos.length))
    
    return (
        <div className="container">
            <header>
                <h1>Todos ({itemCounter})</h1>
                <Form
                    onSubmitForm={onSubmitForm}
                    onChangeText={onChangeText} 
                    text={textInput} />
            </header>

            <main>
                <ul className={"todoItems"}>
                    { renderTodos() }
                </ul>
            </main>
      </div>
    )
}
