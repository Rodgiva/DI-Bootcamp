import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, mark, delall } from "../redux/actions/todosAction";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const TodosList = (props) => {
  const todos = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [id, setId] = useState(0);

  return (
    <div>
      <h1>Todo Manager</h1>
      <input onChange={(e) => setContent(e.target.value)} />
      <Button
        onClick={() => {
          setId(id + 1);
          dispatch(add({ id, content, mark: false }));
        }}
      >
        Add
      </Button>
      <div className="container ">
        {todos.todoList.map((item) => (
          <Card className="task" key={item.id}>
            <h3>{item.content}</h3>
            Done: {item.mark ? " ✓" : " X"}
            <Button
              variant="primary"
              onClick={() => {
                dispatch(mark({ id: item.id, mark: true }));
              }}
            >
              Mark Done
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                dispatch(mark({ id: item.id, mark: true }));
              }}
            >
              Delete
            </Button>
          </Card>
        ))}
      </div>

      <Button onClick={() => dispatch(delall())}>Delete All</Button>
    </div>
  );
};

export default TodosList;