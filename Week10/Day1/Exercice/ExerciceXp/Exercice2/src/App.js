import "./App.css";
import Car from "./Components/Car";
import Garage from "./Components/Garage";
import Events from "./Components/Events";
import Phone from "./Components/Phone";
import Color from "./Components/Color";

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div className="App">
      {/* <Garage size="small" />
      <Car car={carinfo} /> */}
      <Color />

      <div className="App-header">
        {/* <Events /> */}
        {/* <Phone /> */}
      </div>
    </div>
  );
}

export default App;
