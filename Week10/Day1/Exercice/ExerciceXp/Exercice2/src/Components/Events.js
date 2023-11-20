import { useState, useEffect } from "react";

const Events = (props) => {
  const clickMe = () => {
    alert("Biiiiiip");
  };

  const [msg, setMsg] = useState("");

  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      alert(e.target.value);
    }
  };

  const setBtnVal = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <>
      <button onClick={clickMe}>Bip... ?</button>
      <input type="text" onKeyDown={handleKeyDown} />
      <button onClick={() => setBtnVal()}>{isToggleOn ? "ON" : "OFF"}</button>
    </>
  );
};

export default Events;
