import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList = (props) => {
  const todos = useSelector((state) => state.todos.todoList);
  console.log(todos.length);

  if (todos.length == 0) {
    return (
      <>
        <h2>No Posts</h2>
        <AddTodo />
      </>
    );
  } else {
    return (
      <>
        <h2>Todos List</h2>
        {todos.map((item) => (
          <TodoItem item={item} />
        ))}
        <AddTodo />
      </>
    );
  }
};

export default TodoList;
