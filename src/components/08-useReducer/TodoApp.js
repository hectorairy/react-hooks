import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { FormTODO } from "./FormTODO";

import "./styles.css";

// const initialState = [
//   {
//     id: new Date().getTime(),
//     desc: "Aprender React",
//     done: false,
//   },
// ];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoID) => {
    // console.log(todoID);

    const action = {
      type: "delete",
      payload: todoID,
    };

    dispatch(action);
  };

  const handleToggle = (todoID) => {
    const action = {
      type: "toggle",
      payload: todoID,
    };

    dispatch(action);
  };

  const handleAddTODO = (newTODO) => {
    const action = {
      type: "add",
      payload: newTODO,
    };

    dispatch(action);
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <FormTODO handleAddTODO={handleAddTODO} />
        </div>
      </div>
    </div>
  );
};
