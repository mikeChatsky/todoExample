import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './App';
import './index.css';
import store from './store/store'

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);