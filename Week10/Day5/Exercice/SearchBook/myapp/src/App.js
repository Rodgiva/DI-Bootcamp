import "./App.css";
import Book from "./components/Book";
import BookList from "./components/BookList";
import Title from "./components/Title";
import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  return (
    <div className="App">
      <AppContext.Provider value={{ data, setData }}>
        <Title />
        <Book />
        <BookList />
      </AppContext.Provider>
    </div>
  );
}

export default App;
