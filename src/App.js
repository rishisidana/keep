import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoApp from './components/ToDoApp';

class App extends Component {
  render() {
    return (
      <div >
        <ToDoApp/>
      </div>
    );
  }
}

export default App;
