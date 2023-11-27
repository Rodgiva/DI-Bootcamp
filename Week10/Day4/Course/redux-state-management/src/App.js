import "./App.css";
import Counter from "./components/Counter";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Posts />
      </header>
    </div>
  );
}

export default App;
