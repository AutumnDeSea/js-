import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/todo/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo></Todo>
      </div>
    );
  }
}

export default App;
