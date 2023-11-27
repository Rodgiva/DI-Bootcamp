import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <PostsList />
      </header>
    </div>
  );
}

export default App;
