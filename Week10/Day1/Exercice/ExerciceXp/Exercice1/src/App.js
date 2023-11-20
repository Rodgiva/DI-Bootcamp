import "./App.css";
import BuggyCounter from "./component/BuggyCounter";
import ErrorBoundary from "./component/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
