import { useSelector, useDispatch } from "react-redux";
import { addTask, editTask, deleteTask, getTasksByDate } from "./tasksSlice";
import { useState, useEffect } from "react";

const AddTask = (props) => {
  const dispatch = useDispatch();
  const [taskTxt, setTaskTxt] = useState("");

  const add = (e) => {
    e.preventDefault();
    dispatch(addTask(taskTxt, props.date));
  };

  return (
    <>
      <h2>Add Task</h2>
      <form>
        Task: <input onChange={(e) => setTaskTxt(e.target.value)} />
        <button onClick={add}>Add</button>
      </form>
    </>
  );
};

export default AddTask;
