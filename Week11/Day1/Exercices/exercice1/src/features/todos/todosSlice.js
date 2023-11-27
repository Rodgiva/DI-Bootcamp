import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      prepare(title, content, done = false) {
        return {
          payload: {
            title,
            content,
            done,
          },
        };
      },
      reducer(state, action) {
        const newTodo = {
          id: state.todoList.length + 1,
          title: action.payload.title,
          content: action.payload.content,
          done: action.payload.done,
        };
        state.todoList.push(newTodo);
      },
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const index = state.todoList.findIndex((item) => item.id === id);
      state.todoList[index].done = !state.todoList[index].done;
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      const index = state.todoList.findIndex((item) => item.id === id);
      state.todoList.splice(index, 1);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

// export const todosState = (state) => state.todos

export default todosSlice.reducer;
