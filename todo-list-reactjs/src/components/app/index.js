import React, { Component } from 'react';
import Todo from './../todo';
import { Body } from './_Body';

class App extends Component {
  render() {
    return (
      <Body className="App">
        <Todo />
      </Body>
    );
  }
}

export default App;
