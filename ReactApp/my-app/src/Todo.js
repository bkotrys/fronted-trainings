import React, { Component } from 'react';
import ElementList from './ElementList.js';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      term: ''
    }
  }

  doneElement = (event) => {
    console.log('Done button test');
    console.log(event);
  }

  editElement = (event) => {
    console.log('Edit button test');
    console.log(event);
  }

  deleteElement = (index) => {
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos
    });
  }

  addElement(event) {
    this.setState({
      todos: [...this.state.todos, this.state.term],
      term: ''
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.addElement();
  }

  handleChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Todo list test</h1>
        <form>
          <input type="text" value={this.state.term} onChange={this.handleChange} />
          <button onClick={this.onSubmit}>Submit</button>
        </form>
        <ul>
          {this.state.todos.map((element, index) => <ElementList index={index} element={element} deleteElement={this.deleteElement} />)}
        </ul>
      </div>
    );
  }
}

export default Todo;