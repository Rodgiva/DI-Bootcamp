import "./App.css";
import { useState } from "react";

function App() {
  const [nb1, setNb1] = useState(0);
  const [nb2, setNb2] = useState(0);

  const [res, setRes] = useState(nb1 + nb2);

  const [operation, setOperation] = useState("addition");

  const calculate = (operation) => {
    console.log("multiplication" === operation);
    switch (operation) {
      case "addition":
        return setRes(nb1 + nb2);
      case "substraction":
        return setRes(nb1 - nb2);
      case "multiplication":
        return setRes(nb1 * nb2);
      case "division":
        return setRes(nb1 / nb2);
      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>
      <div>
        <input
          type="number"
          className="inpuNb"
          onChange={(e) => setNb1(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="inpuNb"
          onChange={(e) => setNb2(parseInt(e.target.value))}
        />
      </div>
      <button className="btn" onClick={() => calculate(operation)}>
        Calculate
      </button>
      <select
        className="select"
        onChange={(e) => {
          return setOperation(e.target.value);
        }}
      >
        <option value="addition">addition</option>
        <option value="substraction">substraction</option>
        <option value="multiplication">multiplication</option>
        <option value="division">division</option>
      </select>
      <h1>{res}</h1>
    </div>
  );
}

export default App;
