import { useSelector, useDispatch } from "react-redux";
import { addTask, editTask, deleteTask, getTasksByDate } from "./tasksSlice";
import AddTask from "./AddTask";
import Task from "./Task";
import EditTask from "./EditTask";
import Calendar from "./Calendar";
import { useState, useEffect } from "react";

const Tasks = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.taskList);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [tasksDisplay, setTasksDisplay] = useState([]);

  useEffect(() => {
    // setTasksDisplay(filterByDate());
    filterByDate();
  }, []);

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const filterByDate = () => {
    setTasksDisplay(tasks.filter((task) => task.date === date));
  };

  return (
    <>
      <input type="date" onChange={handleDate} value={date} />
      <AddTask date={date} />
      {tasksDisplay.map((task) => (
        <div key={task.id} className="task">
          <Task task={task} />
          <EditTask task={task} />
        </div>
      ))}
    </>
  );
};

export default Tasks;
