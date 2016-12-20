import {DELETE_TODO, CREATE_TODO, UPDATE_TODO} from '../actions/todoActions';
import {isFSA} from 'flux-standard-action';
import {Immutable} from 'immutable';

function todosReducer(state = [], action) {
  if (!isFSA(action)) {
    return state;
  }
  switch (action.type) {
    case (CREATE_TODO):
      return Immutable.List.push(...state, {
        text: action.payload.text,
        isDone: false
      });
      break;

    case (UPDATE_TODO):
      const currentTodos = Immutable.List.of(state);

      return currentTodos.update(currentTodos.find((item) => {
            return item.get('id') === action.payload.id
          }),
          item => {
            return item.set('text', action.payload.text)
          });

      break;

    case (DELETE_TODO):
      return Immutable.List.of(state)
          .filter(item => {
            return item.get('id') !== action.payload.id
          });

      break;

    default:
      return state;
  }
}

export default todosReducer;