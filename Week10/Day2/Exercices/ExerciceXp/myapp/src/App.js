import { Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import ShopScreen from "./components/ShopScreen";
import ErrorBoundary from "./components/ErrorBoundary";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">About</NavLink>
        <NavLink to="/shop">Contact</NavLink>
        <NavLink to="/postList">Post List</NavLink>
        <NavLink to="/example1">Example 1</NavLink>
        <NavLink to="/example2">Example 2</NavLink>
        <NavLink to="/example3">Example 3</NavLink>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/postList"
          element={
            <ErrorBoundary>
              <PostList />
            </ErrorBoundary>
          }
        />
        <Route
          path="/example1"
          element={
            <ErrorBoundary>
              <Example1 />
            </ErrorBoundary>
          }
        />
        <Route
          path="/example2"
          element={
            <ErrorBoundary>
              <Example2 />
            </ErrorBoundary>
          }
        />
        <Route
          path="/example3"
          element={
            <ErrorBoundary>
              <Example3 />
            </ErrorBoundary>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
