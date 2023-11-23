import { useContext } from "react";
import { AppContext } from "../App";
import { AppContext2 } from "../App";
import {DisplayContext} from './Display';

const ShowCounter = (props) => {
  const {count} = useContext(AppContext);
  const {text} = useContext(AppContext2);
  const {username} = useContext(DisplayContext)
  return (
    <>
      <h2>ShowCounter: {text} {username}</h2>
      <h2>Count: {count}</h2>
    </>
  );
};
export default ShowCounter;
