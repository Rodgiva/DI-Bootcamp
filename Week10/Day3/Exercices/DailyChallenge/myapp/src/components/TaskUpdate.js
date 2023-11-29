import { useContext, useState } from "react";
import { TaskContext } from "./TaskProvider";

const TaskUpdate = (props) => {
  const { dispatch } = useContext(TaskContext);
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() === "") return;
    dispatch({ type: "UPDATE_TASK", id: props.id, text });
    setText("");
  };

  return (
    <>
      <h3>Update</h3>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default TaskUpdate;
