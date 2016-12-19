import {createStore} from 'redux'
import appReducer from '../reducers/app.reducer';
//import {todoActions} from '../actions/todoActions'

export createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// console.log(store.getState());
//
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
//
// store.dispatch(todoActions.createTodo('First'));
// store.dispatch(todoActions.createTodo('Second'));
// store.dispatch(todoActions.createTodo('Third'));
//
// unsubscribe();