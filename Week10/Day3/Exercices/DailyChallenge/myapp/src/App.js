import "./App.css";
import TaskProvider from "./components/TaskProvider";
import TaskAdder from "./components/TaskAdder";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskProvider>
          <h1>Task Manager</h1>
          <TaskAdder />
          <TaskList />
        </TaskProvider>
      </header>
    </div>
  );
}

export default App;
