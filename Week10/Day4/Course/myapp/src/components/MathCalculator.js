import { useState, useReducer } from "react";

const iniState = {
  result: 0,
  value: 0,
  name: "Bob",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, result: state.result + 1, name: "Add" };
    case "MINUS":
      return { ...state, result: state.result - 1, name: "Sub" };
    case "MULTIPLY":
      return { ...state, result: state.result * 2, name: "Multiply" };
    case "DIVIDE":
      return { ...state, result: state.result / 3, name: "Divide" };
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "CHANGE_VALUE":
      return { ...state, value: parseInt(action.payload) };
    case "INCR_BY_VALUE":
      return { ...state, result: state.result + state.value };
    default:
      return { ...state, result: 50 };
  }
};

const MathCalculator = (props) => {
  const [state, dispatch] = useReducer(reducer, iniState);
  console.log(state);
  return (
    <>
      <h2>Simple Calculator</h2>
      <button onClick={() => dispatch({ type: "ADD" })}>
        Increment by One
      </button>
      <button onClick={() => dispatch({ type: "MINUS" })}>
        Decrement by One
      </button>
      <button onClick={() => dispatch({ type: "MULTIPLY" })}>
        Multiply by Two
      </button>
      <button onClick={() => dispatch({ type: "DIVIDE" })}>
        Divide by Three
      </button>
      <button onClick={() => dispatch({ type: "INCR_BY_VALUE" })}>
        Increment by Value
      </button>
      <input
        onChange={(e) =>
          dispatch({ type: "CHANGE_VALUE", payload: e.target.value })
        }
      />
      <h4>Result: {state.result}</h4>
      <h4>Result: {state.name}</h4>
    </>
  );
};

export default MathCalculator;
