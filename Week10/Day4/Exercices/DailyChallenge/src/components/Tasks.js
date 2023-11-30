import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, get, edit, del } from "../redux/actions/tasksAction.js";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Tasks = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasksReducer);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [taskTxt, setTaskTxt] = useState("");

  useEffect(() => {
    dispatch(get(date));
  }, [date]);

  const addTask = () => {
    dispatch(add({ task: taskTxt, date }));
  };

  return (
    <>
      <h1>Tasks Manager</h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input onChange={(e) => setTaskTxt(e.target.value)} />
      <Button onClick={addTask}>Add</Button>
      <h3>Tasks Manager</h3>
      {tasks.tasks.map((task) => (
        <div key={task.id}>{task.task}</div>
      ))}
    </>
  );
};

export default Tasks;
