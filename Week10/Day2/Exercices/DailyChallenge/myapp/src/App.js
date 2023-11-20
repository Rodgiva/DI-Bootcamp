import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("");
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const getHello = async () => {
    const res = await fetch("http://127.0.0.1:3030/api/hello");
    const data = await res.json();
    setMsg(data.msg);
  };

  const getInput = async (e) => {
    e.preventDefault();

    console.log("bip");

    const objBody = {
      method: "post",
      mode: "cors",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ input }),
    };

    try {
      const res = await fetch("http://127.0.0.1:3030/api/world", objBody);
      const data = await res.json();
      setResponse(data.msg);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHello();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{msg}</h1>
        <form onSubmit={getInput}>
          <input onChange={(e) => setInput(e.target.value)} />
          <input type="submit" value="Submit" />
        </form>
        <h1>{response}</h1>
      </header>
    </div>
  );
}

export default App;
