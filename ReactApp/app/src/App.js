import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Todo } from './Todo';
import axios from 'axios';

// class App extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// const App = () => {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
// }

const App = (props) => {
  const onClick = () => {

  }
 

  const { name, surname, containerClass } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className={`App-name ${containerClass}`}>
        <p onClick={onClick}>
          Cześć jestem {name} {surname}!
        </p>
        <Todo 
          title="List zakupów"
          />
      </div>
    </div>
  );
}

export default App;




