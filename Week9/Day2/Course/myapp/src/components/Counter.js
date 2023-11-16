import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState("");

  const addOne = (val) => {
    setCount(count + 1);
  };

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => addOne()}>Add</button>

      <div>
        <input type="text" onInput={handleInput} />
        <h4>{inputVal}</h4>
      </div>
    </>
  );
};

export default Counter;
