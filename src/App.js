import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
            <Input/>
        </div>
      </div>
    );
  }
}

export default TodoApp;
