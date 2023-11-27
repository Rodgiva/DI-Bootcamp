import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  incrementWithPrepare,
  counterState,
} from "./counterSlice";
import { useState } from "react";

const Counter = (props) => {
  //   const count = useSelector((state) => state.counter.count);
  const count = useSelector(counterState);
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <p>Count state: {count}</p>
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(decrement())}> - </button>
        <button onClick={() => dispatch(reset())}> Reset </button>
        <br />
        <input onChange={(e) => setNum(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(num))}>
          Increment By Amount
        </button>
        <br />
        <button onClick={() => dispatch(incrementWithPrepare(1, 5, 100))}>
          Increment With Prepared
        </button>
      </div>
    </>
  );
};

export default Counter;
