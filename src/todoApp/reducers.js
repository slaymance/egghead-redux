import { combineReducers } from 'redux';

// this reducer handles a single todo item, and thus is separated from todos
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      return state.id === action.id ? {
        ...state,
        completed: !state.completed,
      } : state;
    default:
      return state;
  }
};

// todos reducer handles all todos in the list by invoking the todo reducer for the individual todos
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action),
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

// this reducer handles the visibility state of todos in the store
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default combineReducers({
  todos,
  visibilityFilter,
});
