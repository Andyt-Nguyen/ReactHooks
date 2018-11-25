import React from 'react'

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            note: props.note,
            isEdit: false,

        }
        this.onTextChange = this.onTextChange.bind(this)
        this.onSubmitEdit = this.onSubmitEdit.bind(this)
    }

    onSubmitEdit(e) {
        e.preventDefault()
        let note = this.state.note
        this.setState({note, isEdit: false})

    }

    onTextChange(e) {
        this.setState({note: e.target.value})
    }

    render() {
        return (
            <li className={"todoItem"}>
                <form onSubmit={this.onSubmitEdit}>
                    <button className={"btn editBtn"} type={"button"} onClick={() => this.setState({isEdit:true})}>
                        <i class="fas fa-edit"></i>
                    </button>
                    {
                        this.state.isEdit
                        ? <input className={"editInput"} onChange={this.onTextChange} value={this.state.note}/>
                        : <span className={"todoItemText"}>{this.state.note}</span>
        
                    }
                </form>
        
                <button className={"btn deleteBtn"} onClick={this.props.onDelete}>
                    <i class="fas fa-trash-alt"></i>
                </button>
            </li> 
        )
    }
}
