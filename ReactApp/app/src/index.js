import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App 
    name="Kamil" 
    surname="Faron"
    containerClass="container"
    />, 
  document.getElementById('root')
);
registerServiceWorker();
