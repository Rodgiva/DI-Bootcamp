import { useState, createContext, useEffect } from "react";
import Theme from "./components/Theme";
import "./App.css";

export const AppContext = createContext();

function App() {
  const [themeColor, setThemeColor] = useState("dark");

  return (
    <div className={themeColor}>
      <div className="App">
        <div className="App-header ">
          <AppContext.Provider value={{ themeColor, setThemeColor }}>
            <Theme />
          </AppContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
