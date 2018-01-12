import React, { Component } from 'react';
import styled from 'styled-components';
import { Title } from './styles/todo';
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

  addElement() {
    this.setState({
      todos: [...this.state.todos, this.state.term]
    })
    this.setState({
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
            this.state.todos.map((element, index) => <li key={index}>{element}</li>)
          }
        </ul>
      </div>
    );
  }
}

export { Todo }