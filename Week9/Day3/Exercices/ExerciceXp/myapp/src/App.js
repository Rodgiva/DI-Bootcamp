import "./App.css";
import UserFavoriteAnimals from "./UserFavoriteAnimals.js";
import Exercice from "./exercice3.js";

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* EXERCICE 1
        {myelement}
        <p>Hello World</p>
        <p>React is {sum} times better with JSX</p> */}

        {/* Exercice 2.1
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3> */}

        {/* Exercice 2.2
        {user.favAnimals.map((item) => {
          return <UserFavoriteAnimals favAnimal={item} />;
        })} */}

        {/* {user.favAnimals.map((item) => {
          return <UserFavoriteAnimals favAnimal={item} />;
        })} */}

        <Exercice />
      </header>
    </div>
  );
}

export default App;
