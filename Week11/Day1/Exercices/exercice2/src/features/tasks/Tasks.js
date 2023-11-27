import { useSelector, useDispatch } from "react-redux";
import { addTask, editTask, deleteTask, getTasksByDate } from "./tasksSlice";
import Calendar from "./Calendar";

const Tasks = (props) => {
  const dispatch = useDispatch();

  const getCalendar = (date) => {
    console.log(date);
  };

  return (
    <>
      <Calendar getCalendar={getCalendar} />
    </>
  );
};

export default Tasks;
