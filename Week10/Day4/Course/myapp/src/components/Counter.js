import { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/actions/counterActions";

const Counter = (props) => {
  console.log(props);
  //   const [counter, setCounter] = useState(0);
  const counter = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();
  return (
    <div>
      Value: {counter}{" "}
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   // console.log("state=>", state);
//   return {
//     a: state.counter.value,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };
export default Counter;
