import { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/actions/counterActions.js";

const Counter = (props) => {
  console.log("props=>", props);
//   const [counter, setCounter] = useState(0);
  const counter = useSelector(state => state.counterReducer.value)
  const dispatch = useDispatch()
  return (
    <div>
      Value: {counter}{" "}
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};
// const mapStateToProps = (state) => {
//   console.log("state=>", state);
//   return {
//     counter: state.counterReducer.value,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//   };
// };
export default Counter;
