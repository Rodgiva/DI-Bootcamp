import Display from "./components/Display";
import Action from "./components/Action";
import { useState, createContext } from "react";
import "./App.css";

export const AppContext = createContext();
export const AppContext2 = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Bla Bla Bla");
  return (
    <div className="App">
      <header className="App-header-">
        <AppContext.Provider value={{ count, setCount, name: "John" }}>

          <AppContext2.Provider value={{ text }}>
            <Display />
          </AppContext2.Provider>
          
          <Action />
        </AppContext.Provider>
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
