import React from 'react'

export default class Todo extends React.Component {


  render() {
    return (
      <div>
        <li key = {this.props.todo.id} > {this.props.todo.name } { this.props.todo.completed ? <span> - completed </span> : <span>  </span>} </li>
            
      </div>
    )
  }
}
