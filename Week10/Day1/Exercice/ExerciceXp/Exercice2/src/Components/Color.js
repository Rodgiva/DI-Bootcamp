import { useState, useEffect } from "react";

const Color = (props) => {
  const [favoriteColor, setFavoriteColor] = useState("red");

  const changeColor = () => {
    setFavoriteColor("blue");
  };

  useEffect(() => {
    setFavoriteColor("Yellow");
    // alert("useEffect reached");
  }, []);

  return (
    <>
      <header className="App-header">
        <h1>
          My favorite color is <i>{favoriteColor}</i>
        </h1>
        <button onClick={changeColor}>Click</button>
      </header>
    </>
  );
};

export default Color;
