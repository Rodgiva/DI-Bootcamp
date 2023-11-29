import { useContext, useState, useref } from "react";
import { TaskContext } from "./TaskProvider";
import TaskUpdate from "./TaskUpdate";

const TaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext);
  const [showUpdate, setShowUpdate] = useState(false);
  const [taskId, setTaskId] = useState();

  const handleCompleteTask = (id) => {
    dispatch({ type: "COMPLETE_TASK", id });
  };

  const handleRemoveTask = (id) => {
    dispatch({ type: "REMOVE_TASK", id });
  };

  const showFormUpdate = (id) => {
    setShowUpdate(true);
    setTaskId(id);
  };

  const filter = () => {
    dispatch({ type: "GET_COMPLETED_TASKS" });
  };

  const showAll = () => {
    dispatch({ type: "GET_TASKS" });
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="task"
            onClick={() => showFormUpdate(task.id)}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCompleteTask(task.id)}
            />
            {task.text}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={filter}>Filter</button>
      <button onClick={showAll}>Show All</button>
      {showUpdate && <TaskUpdate id={taskId} />}
    </div>
  );
};

export default TaskList;
