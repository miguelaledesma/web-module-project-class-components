import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        Todo App
        <ul>
          <li>walk dog</li>
          <li>gym</li>
          <li>homework</li>
        </ul>

        <form>
          <input/>
          <button>add</button>
          <button>clear</button>
        </form>
      </div>
    )
  }
}
