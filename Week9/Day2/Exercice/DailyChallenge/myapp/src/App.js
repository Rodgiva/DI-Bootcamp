import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const incrVote = (index) => {
    const votes = languages.map((language, i) => {
      if (i === index) {
        return { name: language.name, votes: language.votes + 1 };
      } else {
        return language;
      }
    });

    setLanguages(votes);
  };

  return (
    <div className="App">
      <header className="App-header">
        {languages.map((item, i) => {
          return (
            <div className="container" key={i}>
              {item.votes} {item.name}{" "}
              <button onClick={() => incrVote(i)}>Vote</button>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
