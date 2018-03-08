import React, { Component } from 'react';
import styled from 'styled-components';
import { Title } from './styles/todo';
import axios from 'axios';

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      term: ''
    }
  }
  // state = {
  //   todos: [],
  //   term: ''
  // }
  addElement() {
    this.setState({
      todos: [...this.state.todos, this.state.term],
      term: ''
    })
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
  // /todos/1 
  // //categories/shopping/todos
  componentDidMount() {
    axios.get('/todos/')
      .then((response) => {
        this.setState({
          todos: response.data.todos
        })
      })
      .catch(err => {
        debugger;
        console.error('Błąd serwera!');
      });
  }

  onEdit(element) {
    var newText = prompt('Edycja', element);
    debugger;
    // setState ...
  }

  render(){
    const { title } = this.props;
    return (
      <div className="todo">
        <Title>{title}</Title>
        <form>
          <input type="text" value={this.state.term} onChange={this.handleChange} />
          <button onClick={this.onSubmit}>Dodaj element</button>
        </form>
        <ul>
          {
            this.state.todos.map((element, index) => <li onClick={this.onEdit.bind(this, element)} key={index}>{element}</li>)
          }
        </ul>
      </div>
    );
  }
}

export { Todo }