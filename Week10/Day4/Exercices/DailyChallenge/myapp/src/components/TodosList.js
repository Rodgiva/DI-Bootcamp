import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, mark, delall } from "../redux/actions/todosActions";

const TodosList = (props) => {
  const todos = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [id, setId] = useState(0);

  return (
    <div>
      <input onChange={(e) => setContent(e.target.value)} />
      <button
        onClick={() => {
          setId(id + 1);
          dispatch(add({ id, content, mark: false }));
        }}
      >
        Add
      </button>
      <ul>
        {todos.todoList.map((item) => (
          <div key={item.id}>
            <li>
              <h3>{item.content}</h3>
              {item.mark ? " ✓ Done" : " X Uncomplete"}
            </li>
            <button
              onClick={() => {
                dispatch(mark({ id: item.id, mark: true }));
              }}
            >
              Mark Done
            </button>
          </div>
        ))}
      </ul>
      <button onClick={() => dispatch(delall())}>Delete</button>
    </div>
  );
};

export default TodosList;
