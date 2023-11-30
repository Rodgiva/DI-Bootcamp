import { useSelector, useDispatch } from "react-redux";
import { addTask, editTask, deleteTask, getTasksByDate } from "./tasksSlice";
import { useState, useEffect } from "react";

const EditTask = (props) => {
  const dispatch = useDispatch();
  const [taskTxt, setTaskTxt] = useState("");

  const edit = (e) => {
    e.preventDefault();
    console.log(props);
    dispatch(editTask(props.task.id, taskTxt, props.task.date));
  };

  const remove = (e) => {
    e.preventDefault();
    dispatch(deleteTask(props.id));
  };

  return (
    <>
      <br />
      <h5>Edit Task</h5>
      <form>
        Task: <input onChange={(e) => setTaskTxt(e.target.value)} />
        <button onClick={edit}>Edit</button>
      </form>
      <button onClick={remove}>Delete</button>
    </>
  );
};

export default EditTask;
