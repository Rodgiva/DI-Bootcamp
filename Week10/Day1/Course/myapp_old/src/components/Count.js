import { useState } from "react";

const Count = (props) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      ></button>
      {count}
    </>
  );
};

export default Count;
