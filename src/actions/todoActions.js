export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const todoActions = {
  createTodo(text) {
    return {
      type: CREATE_TODO,
      payload: {
        text: text
      }
    };
  },

  deleteTodo(id) {
    return {
      type: DELETE_TODO,
      payload: {
        id: id
      }
    };
  },

  updateTodo(id, text) {
    return {
      type: UPDATE_TODO,
      payload: {
        id: id,
        text: text
      }
    };
  }
};