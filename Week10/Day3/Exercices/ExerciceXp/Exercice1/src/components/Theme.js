import { useContext } from "react";
import { AppContext } from "../App";

const Theme = () => {
  // const { themeColor, setThemeColor } = useContext(AppContext);
  const context = useContext(AppContext);
  const handleSwitch = () => {
    context.themeColor === "dark"
      ? context.setThemeColor("light")
      : context.setThemeColor("dark");
  };
  return (
    <>
      <button onClick={handleSwitch}>Switch</button>
      <h1>{context.themeColor}</h1>
    </>
  );
};

export default Theme;
