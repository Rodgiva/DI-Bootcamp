import { useState, useEffect } from "react";

const Car = (props) => {
  const [color, setColor] = useState("red");
  return (
    <>
      <header>
        <h1>
          This is a {color} {props.car.name} {props.car.model}
        </h1>
      </header>
      <button onClick={() => setColor("blue")}>Color</button>
    </>
  );
};

export default Car;
