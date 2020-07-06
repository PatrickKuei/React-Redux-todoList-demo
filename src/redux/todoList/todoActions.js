import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./todoType";

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const editTodo = (tempTodo) => {
  return {
    type: EDIT_TODO,
    payload: tempTodo,
  };
};
