import { useState } from "react";
import "./App.css";
import Parent from "./components/Parent";
import Child from "./components/Child";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  // const [email, setEmail] = useState("");
  // const [password, setPAssword] = useState("");
  // const [userName, setUserName] = useState("");
  // const [select, setSelect] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(email);
  //   console.log(password);
  //   console.log(userName);
  // };

  return (
    <div className="App">
      <header className="App-header">
        {/* <form onSubmit={handleSubmit}>
          UserName:{" "}
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
          <br />
          Email:{" "}
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <br />
          Password:{" "}
          <input
            type="password"
            onChange={(e) => setPAssword(e.target.value)}
          />
          <br />
          <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <br />
          <input type="submit" value="Submit" />
        </form> */}
        <h1>Error Boundary</h1>
        {/* <Parent>
          <Child />
        </Parent> */}

        <ErrorBoundary>
          
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
