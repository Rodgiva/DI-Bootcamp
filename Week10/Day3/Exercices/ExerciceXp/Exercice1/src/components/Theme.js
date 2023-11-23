import { useContext } from "react";
import { AppContext } from "../App";

const Theme = () => {
  const { themeColor, setThemeColor } = useContext(AppContext);
  const handleSwitch = () => {
    themeColor === "dark" ? setThemeColor("light") : setThemeColor("dark");
  };
  return (
    <>
      <button onClick={handleSwitch}>Switch</button>
      <h1>{themeColor}</h1>
    </>
  );
};

export default Theme;
