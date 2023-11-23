import { useState, useRef } from "react";

const CharCounter = (props) => {
  const [count, setCount] = useState(0);
  const textRef = useRef(0);

  const handleInput = () => {
    setCount(textRef.current.value.length);
  };

  return (
    <>
      <input ref={textRef} onChange={handleInput} />
      <h1>{count}</h1>
    </>
  );
};
export default CharCounter;
