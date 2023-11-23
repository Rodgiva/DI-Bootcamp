// import Action from "./components/Action";
// import Display from "./components/Display";
import { useState, createContext, useRef } from "react";
import "./App.css";

// export const AppContext = createContext();
// export const AppContext2 = createContext();

function App() {
  const [count, setCount] = useState(0);
  // const name = "Bob";
  // const [text, setText] = useState("Text: blablabla");

  // const usernameRef = useRef("");

  // const show = () => {
  //   console.log("ref=> ", usernameRef.current.value);
  // };

  const nameRef = useRef("Henry");
  let name = "Bob";

  const changes = () => {
    name = "Marie";
    nameRef.current = "Mwé!!!";
    console.log("name =>", name);
    console.log("name =>", nameRef.current);
  };

  return (
    <div className="App">
      {/* <AppContext.Provider value={{ count, setCount, name }}>
        <AppContext2.Provider value={{ text }}>
          <Display />
        </AppContext2.Provider>
        <Action />
      </AppContext.Provider> */}
      <h1>useRef</h1>
      nameRef: {nameRef.current} name: {name}
      {/* <input ref={usernameRef} name="username" />
      <button onClick={show}>Show ref</button> */}
      <br />
      <button onClick={changes}>Show ref</button>
      <br />
      <button onClick={() => setCount(count + 1)}>Add one {count}</button>
    </div>
  );
}

export default App;
