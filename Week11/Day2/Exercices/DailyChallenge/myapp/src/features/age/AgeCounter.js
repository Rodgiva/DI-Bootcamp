import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ageUpAsync, ageDownAsync } from "./ageCounterSlice";
import ReactLogo from "../../logo.svg";

const AgeCounter = (props) => {
  const counter = useSelector((state) => state.age.age);
  const loading = useSelector((state) => state.age.loading);
  const dispatch = useDispatch();
  const [age, setAge] = useState(counter);

  const add = () => {
    dispatch(ageUpAsync({ countAdd: 1 }));
    setAge(counter);
  };

  const sub = () => {
    dispatch(ageDownAsync({ countAdd: 1 }));
    setAge(counter);
  };

  return (
    <>
      <div>
        {console.log(typeof loading)}
        {loading ? (
          <img src={ReactLogo} className="App-logo" alt="logo" />
        ) : (
          <div>Age: {counter}</div>
        )}

        <br />
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
      </div>
    </>
  );
};

export default AgeCounter;
