import React, { Component } from 'react';
import Form from '../Form'
import TodoItemClass from './TodoItemClass'


export default class TodoAppClass extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      text: '',
      isEdit: false
    }

    this.onChangeText = this.onChangeText.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onEdit = this.onEdit.bind(this)
  }

  componentDidMount() {
    this.setState({
      todos: [
        {id:1, note: "Buy Milk", isEdit:false},
        {id:2, note: "Walk Bently", isEdit:false},
        {id:3, note: "Study C++", isEdit:false},
        {id:4, note: "Study Java", isEdit:false}
      ]
    })
  }

  renderTodoItems() {
    return (
      this.state.todos.map( a => (
        <TodoItemClass
            key={a.id}
            id={a.id}
            note={a.note}
            isEdit={a.isEdit}
            onEditSub={this.onEdit}
            onDelete={() => this.onDelete(a.id)}
            />
        )
      )
    )
  }

  onChangeText(e) {
    this.setState({text:e.target.value})
  }

  onDelete(id) {
    let { todos } = this.state
    let index = todos.findIndex( a => a.id == id)
    todos.splice(index, 1)
    this.setState({todos})
  }

  onEdit(e) {
    e.preventDefault()
    
    
  }

  onSubmitForm(e) {
    e.preventDefault()
    let { todos, text } = this.state
    todos.push({id:todos.length, note:text})
    this.setState({todos})
  }

  render() {
    return (
      <div className="container">

        <header>
          <h1>Todos ({this.state.todos.length})</h1>
          <Form 
            onSubmitForm={this.onSubmitForm} 
            onChangeText={this.onChangeText}
            />
        </header>

        <main>
          <ul className={"todoItems"}>
            {this.renderTodoItems()}
          </ul>
        </main>

      </div>
    );
  }
}
