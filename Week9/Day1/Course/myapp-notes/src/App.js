import User from "./component/User.js";
import "./App.css";

import users from "./users.json"

// const users = [
//   { id: 1, name: "Bobby", username: "Bob", email: "bobby@mail.com" },
//   { id: 2, name: "Henry", username: "Henr", email: "henry@mail.com" },
//   { id: 3, name: "Patrick", username: "Pat", email: "patrick@mail.com" },
// ];



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {users.map((item) => {
          return (
            <User info={item} key={item.id}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
