import React, { Component } from 'react';
import SingleTodo from './../single-todo';
import SingleDone from './../single-done';
import { TodoContainer } from './_TodoContainer';
import { List } from './_List';
import { SectionTitle } from './_SectionTitle';
import { Section } from './_Section';
// import { Form, Input, Button } from './styled';
import { Form } from './_Form';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/fontawesome-free-solid';

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
    const todos = [...this.state.todos];
    todos.splice(index, 1)
    this.setState({
      done: [...this.state.done, this.state.todos[index]],
      todos: todos
    });
  }

  editElement = (index, value) => {
    let arr = [...this.state.todos];
    arr[index] = value;
    this.setState({
      todos: arr
    });
  }

  deleteElement = (index) => {
    this.setState({
      todos: [...this.state.todos].splice(index, 1)
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
      <TodoContainer>
        <Section className="todo-section">
          <SectionTitle>TODO</SectionTitle>
          <Form>
            <input 
              type="text" 
              placeholder="What do you have to do?" 
              value={this.state.term} 
              onChange={this.handleChange} 
            />
            <button onClick={this.onSubmit}>
              <FontAwesomeIcon icon={faPlusSquare}/>
            </button>
          </Form>
          <List>
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
          </List>
        </Section>
        <Section className="done-section">
          <SectionTitle done>DONE</SectionTitle>
          <List>
            {this.state.done.map((element, index) => (
              <SingleDone
                index={index}
                key={index}
                element={element}
              />))
            }
          </List>
        </Section>
      </TodoContainer>
    );
  }
}

export default Todo;
