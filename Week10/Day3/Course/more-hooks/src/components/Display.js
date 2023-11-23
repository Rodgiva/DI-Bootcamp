import ShowCounter from "./ShowCounter";
import { createContext } from "react";
export const DisplayContext = createContext();
const Display = (props) => {
  return (
    <>
      <h2>Display:</h2>
      <DisplayContext.Provider value={{ username: "Alla" }}>
        <ShowCounter />
      </DisplayContext.Provider>
    </>
  );
};
export default Display;
