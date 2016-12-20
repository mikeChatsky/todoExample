import React, {propTypes} from 'react';
import Todo from '../todo/Todo';

const TodoList = ({todos, onTodoClick}) => (
    <ul>
      {todos.map(todo => <Todo key={todo.id} {...todo} onclick={() => onTodoClick(todo.id)}/>)}
    </ul>
);
