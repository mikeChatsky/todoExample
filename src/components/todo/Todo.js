import React, {PropTypes} from 'react';

const Todo = ({onclick, text, isDone}) => (
    <li onClick={onclick} className={'todo ' + isDone ? 'done' : ''}>
      {text}
    </li>
);

Todo.propTypes = {
  onclick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired
};

export default Todo;