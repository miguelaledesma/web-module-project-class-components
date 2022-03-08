import React from 'react'

export default class Form extends React.Component {

  constructor(){
    super();
    this.state = {
        input: ''
    }
}

handleChanges = e => {
  this.setState({
      ...this.state,
      input: e.target.value
  });
};

// class property to submit form
handleSubmit = (event) => {
  event.preventDefault();
  this.props.handleAdd(this.state.input);
}
  render() {
    return (
      <div>
         <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChanges} type='text' name='item'/>
          <button>add</button>
          
        </form>
      </div>
    )
  }
}
