import {DELETE_TODO, CREATE_TODO, UPDATE_TODO} from '../actions/todoActions';
import {isFSA} from 'flux-standard-action';
import Immutable from 'immutable'

function todos(state = [], action) {
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
      break;
    case (DELETE_TODO):
      break;
    default:
      return state;
  }
}