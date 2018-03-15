import React, { Component } from 'react';
import SingleTodo from './../single-todo';
import SingleDone from './../single-done';

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
    
    if(this.state.term) {
      this.addElement();
    }
  }

  handleChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <div>
        <section className="todo-section">
          <h1>TODO</h1>
          <form>
            <input type="text" placeholder="What do you have to do?" value={this.state.term} onChange={this.handleChange} />
            <button onClick={this.onSubmit}>Submit</button>
          </form>
          <ul>
            {this.state.todos.map((element, index) => (
              <SingleTodo
                index={index}
                key={index}
                element={element}
                onDelete={this.deleteElement}
                onDone={this.doneElement}
                onEdit={this.editElement}
              />))
            }
          </ul>
        </section>
        <section className="done-section">
          <h1>DONE</h1>
          <ul>
            {this.state.done.map((element, index) => (
              <SingleDone
                index={index}
                key={index}
                element={element}
                onDelete={this.deleteElement}
              />))
            }
          </ul>
        </section>
      </div>
    );
  }
}

export default Todo;
