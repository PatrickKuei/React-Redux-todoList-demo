import { createStore } from "redux";
import todoReducer from "./todoList/todoReducer";

const store = createStore(todoReducer);

export default store;
