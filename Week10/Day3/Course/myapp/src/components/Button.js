import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const Button = (props) => {
  const { count, setCount, name } = useContext(AppContext);

  return (
    <>
      <h2>Button</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h1>{name}</h1>
    </>
  );
};

export default Button;
