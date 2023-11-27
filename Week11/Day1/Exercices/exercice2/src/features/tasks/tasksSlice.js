import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      prepare(title, description, date) {
        return {
          payload: {
            title,
            description,
            date,
          },
        };
      },
      reducer(state, action) {
        const newTask = {
          id: state.taskList.length + 1,
          title: action.payload.title,
          description: action.payload.description,
          date: action.payload.date,
        };
        state.taskList.push(newTask);
      },
    },
    editTask: {
      prepare(id, title, description, date) {
        return {
          payload: {
            id,
            title,
            description,
            date,
          },
        };
      },
      reducer(state, action) {
        const id = action.payload.id;
        const title = action.payload.title;
        const description = action.payload.description;
        const date = action.payload.date;

        const index = state.taskList.findIndex((item) => item.id === id);

        state.taskList[index] = {
          id,
          title,
          description,
          date,
        };
      },
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      const index = state.taskList.findIndex((item) => item.id === id);
      state.taskList.splice(index, 1);
    },
  },
  getTasksByDate: (state, action) => {
    const date = action.payload;
    return state.taskList.filter((item) => item.date === date);
  },
});

export const { addTask, editTask, deleteTask, getTasksByDate } =
  tasksSlice.actions;

export default tasksSlice.reducer;
