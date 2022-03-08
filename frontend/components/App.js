import React from 'react'

import TodoList from './TodoList'
import Form from './Form'

const todos = [
  {
    name: 'Organize Garage',
    id: 1528817077286, // could look different, you could use a timestamp to generate it
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084378,
    completed: false
  },
  {
    name: 'Eat Lunch',
    id: 1528817084058,
    completed: false
  },
  {
    name: 'Eat Dinner',
    id: 1528817094358,
    completed: true
  },
]
  
  












export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }
  
  handleClear = () => {
    console.log('cleared')

    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false)
      })
    })
  }


  handleAdd = (item) => {
    const newItem = {
    name: item,
    id: Date.now(),
    completed: false
  };

  this.setState({
    ...this.state,
    todos: [...this.state.todos, newItem]
  });
}

handleToggle = (item) => {
  this.setState({
    ...this.state,
    todos: this.state.todos.map(list => {
      if(list.id === item.id){
        return ({
          ...list,
          completed: !list.completed
        })
      }
      return list;
    })
  })
  }


  render() {
    console.log(todos)
    
    return (
      <div>
        Todo App
       <TodoList handleToggle = {this.handleToggle}  todos = {todos} handleClear ={this.handleClear} /> 
      <Form handleAdd = {this.handleAdd} /> 
       <button  >clear</button>
      </div>
    )
    }
  }