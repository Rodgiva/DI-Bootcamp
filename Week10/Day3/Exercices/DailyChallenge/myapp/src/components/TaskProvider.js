import { createContext, useReducer } from "react";

export const TaskContext = createContext();

const ADD_TASK = "ADD_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const UPDATE_TASK = "UPDATE_TASK";
const GET_TASKS = "GET_TASKS";
const GET_COMPLETED_TASKS = "GET_COMPLETED_TASKS";

const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = { id: Date.now(), text: action.text, completed: false };
      return [...state, newTask];
    case COMPLETE_TASK:
      return state.map((task) =>
        task.id === action.id ? { ...task, completed: true } : task
      );
    case UPDATE_TASK:
      return state.map((task) =>
        task.id === action.id ? { ...task, text: action.text } : task
      );
    case GET_TASKS:
      return state;
    case GET_COMPLETED_TASKS:
      return state.filter((task) => task.completed === true);
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
};

const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
