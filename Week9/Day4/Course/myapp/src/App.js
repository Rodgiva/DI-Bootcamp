import "./App.css";
import Counter from "./components/Counter.js";
import CounterClass from "./components/CounterClass.js";
import Users from "./components/Users.js";
import UsersFunction from "./components/UsersFunction.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter />
        <CounterClass /> */}
        {/* <Users /> */}
        <UsersFunction />
      </header>
    </div>
  );
}

export default App;
