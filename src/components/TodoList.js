import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../redux";

function TodoList() {
  const todoList = useSelector((state) => state.todoList);

  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);

  const [tempTodo, setTempTodo] = useState("");

  return (
    <div>
      <h1>TODO LIST</h1>
      {!editing ? (
        <Fragment>
          <h2>ADD TODO</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (newTodo !== "") {
                dispatch(addTodo(newTodo));
                setNewTodo("");
              }
            }}
          >
            <input
              type="index"
              value={newTodo}
              onChange={(e) => {
                setNewTodo(e.target.value);
              }}
            ></input>
            <button>SUBMIT</button>
          </form>
        </Fragment>
      ) : (
        <Fragment>
          <h2>EDIT TODO</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEditing(!editing);
              dispatch(editTodo(tempTodo));
            }}
          >
            <input
              type="text"
              value={tempTodo.todo}
              onChange={(e) =>
                setTempTodo({ ...tempTodo, todo: e.target.value })
              }
            ></input>
            <button>EDIT</button>
          </form>
        </Fragment>
      )}
      <ol>
        {todoList.map((item) => (
          <li key={item.todo + item.id}>
            {item.todo}
            <button onClick={() => dispatch(deleteTodo(item.id))}>
              delete
            </button>
            <button
              onClick={() => {
                setEditing(true);
                setTempTodo(item);
              }}
            >
              edit
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
