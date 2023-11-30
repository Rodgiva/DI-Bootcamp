import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      prepare(task, date) {
        return {
          payload: {
            task,
            date,
          },
        };
      },
      reducer(state, action) {
        const newTask = {
          id: state.taskList.length + 1,
          task: action.payload.task,
          date: action.payload.date,
        };
        state.taskList.push(newTask);
      },
    },
    editTask: {
      prepare(id, task, date) {
        return {
          payload: {
            id,
            task,
            date,
          },
        };
      },
      reducer(state, action) {
        const id = action.payload.id;
        const task = action.payload.task;
        const date = action.payload.date;

        const index = state.taskList.findIndex((item) => item.id === id);

        console.log(action.payload);

        state.taskList[index] = {
          id,
          task,
          date,
        };
      },
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      const index = state.taskList.findIndex((item) => item.id === id);
      state.taskList.splice(index, 1);
    },
    getTasksByDate: (state, action) => {
      const date = action.payload;
      state.taskList.filter((item) => item.date === date);
    },
  },
});

export const { addTask, editTask, deleteTask, getTasksByDate } =
  tasksSlice.actions;

export default tasksSlice.reducer;
