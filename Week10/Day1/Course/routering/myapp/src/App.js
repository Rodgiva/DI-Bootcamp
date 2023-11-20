import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link> {" "}
          <Link to="/about">About</Link> {" "}
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:id/:id2" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
