import { useState, createContext, useRef } from "react";  
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // const usernameRef = useRef();
  // const divRef = useRef();

  const nameRef = useRef("Dan");
  let name = "John";

  // const show = () => {
  //   console.log('ref=>', usernameRef.current.value, usernameRef.current.name);
  //   console.log('div ref=>', divRef.current.className);
  // }

  const changes = () => {
    name = "Marry";
    console.log("name=>", name);
    nameRef.current = "Avi";
    console.log("nameRef=>", nameRef.current);
  };

  return (
    <div className="App">
      <header className="App-header-">
        <h1>useRef</h1>
        nameRef: {nameRef.current} name:{name}
        {/* <input ref={usernameRef} name="username"/>
        <button onClick={show}>Show ref</button> */}
        <br></br>
        <button onClick={changes}>Show ref</button>
        <br></br>
        <button onClick={() => setCount(count + 1)}>Add 1 {count}</button>
      </header>
    </div>
  );
}

export default App;

/*
useContext - createContext

App (state)
  |_Display
  |       |_ShowCounter - count
  |_Action
          |_Button - add 1 to count

         APP
        /    \
  Display    Action    a
    /           \
ShowCounter     Button state    b
                 / \             \
                d   e             c
*/
