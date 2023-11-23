import GameCard from "./components/GameCards";
import Score from "./components/Score";
import { useState, createContext } from "react";
import "./App.css";

export const AppContext = createContext();

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <AppContext.Provider value={{ score, setScore }}>
        <Score />
        <GameCard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
