import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./todosSlice";
import { useState } from "react";

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const toggle = (e) => {
    e.preventDefault();
    dispatch(toggleTodo(props.item.id));
  };

  const remove = (e) => {
    e.preventDefault();
    dispatch(removeTodo(props.item.id))
  };

  return (
    <>
      <div key={props.item.id}>
        <h3>{props.item.title}</h3>
        <p>{props.item.content}</p>
        <h5>{props.item.done ? "DONE" : "TO DO"}</h5>
        <button onClick={toggle}>Toggle</button>
        <button onClick={remove}>Remove</button>
      </div>
    </>
  );
};

export default TodoItem;
