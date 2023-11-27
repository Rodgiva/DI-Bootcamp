import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./todosSlice";
import { useState } from "react";

const AddTodo = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const add = (e) => {
    e.preventDefault();
    dispatch(addTodo(title, content));
  };

  return (
    <>
      <h2>Add Todo</h2>
      <form>
        Title: <input onChange={(e) => setTitle(e.target.value)} />
        <br />
        Content: <input onChange={(e) => setContent(e.target.value)} />
        <br />
          <button onClick={add}>Add Todo</button>
      </form>
    </>
  );
};

export default AddTodo;
