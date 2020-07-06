import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./todoType";

const initailState = {
  todoList: [],
};

const todoReducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        todo: action.payload,
        id: state.todoList.length + action.payload,
      };
      return {
        ...state,
        todoList: [...state.todoList, newTodo],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };
    case EDIT_TODO:
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
