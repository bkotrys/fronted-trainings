import React, { Component } from 'react';
import ElementList from './ElementList.js';
import DoneList from './DoneList.js';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      term: '',
      done: []
    }
  }

  doneElement = (index) => {
    this.setState({done: [...this.state.done, this.state.todos[index]]});
  }

  editElement = (index, value) => {
    let arr = this.state.todos;
    arr[index] = value;
    this.setState({
      todos: arr
    });
  }

  deleteElement = (index, list) => {
    if (list === 'todo') {
      this.state.todos.splice(index, 1);
      this.setState({
        todos: this.state.todos
      });
    } else if (list === 'done') {
      this.state.done.splice(index, 1);
      this.setState({
        done: this.state.done
      });
    }
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
        <section>
          <h1>TODO</h1>
          <form>
            <input type="text" placeholder="What do you have to do?" value={this.state.term} onChange={this.handleChange} />
            <button onClick={this.onSubmit}>Submit</button>
          </form>
          <ul>
            {this.state.todos.map((element, index) => <ElementList
              index={index}
              element={element}
              deleteElement={this.deleteElement}
              doneElement={this.doneElement}
              editElement={this.editElement}
            />)}
          </ul>
        </section>
        <section>
          <h1>DONE</h1>
          <ul>
            {this.state.done.map((element, index) => <DoneList
              index={index}
              element={element}
              deleteElement={this.deleteElement}
            />)}
          </ul>
        </section>
      </div>
    );
  }
}

export default Todo;