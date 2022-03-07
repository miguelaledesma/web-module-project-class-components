import React from 'react'

import TodoList from './TodoList'


const todos = [
  {
    name: 'Organize Garage',
    id: 1528817077286, // could look different, you could use a timestamp to generate it
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    name: 'Eat Lunch',
    id: 1528817084358,
    completed: false
  },
  {
    name: 'Eat Dinner',
    id: 1528817084358,
    completed: true
  },
]
  
  


const initialState = { todos }









export default class App extends React.Component {

  state = initialState
  


  render() {
    console.log(todos)
    
    return (
      <div>
        Todo App
       <TodoList todos = {todos}/> 

        <form>
          <input/>
          <button>add</button>
          <button>clear</button>
        </form>
      </div>
    )
  }
}
