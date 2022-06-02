import "./App.css";
import { useState } from "react";
import CityContext from "./contexts/city.context";
import WeatherList from "./components/weather-list.component";

function App() {
  const [city, setCity] = useState("London");
  const [contextData, setContextData] = useState("London");
  const cityHandler = (event) => {
    setCity(event.target.value);
  };

  const contextDataHandler = () => {
    setContextData(city);
  };

  console.log(contextData);
  return (
    <div>
      <div className="form">
        <input
          className="main-input"
          type="text"
          value={city}
          onChange={cityHandler}
        />
        <button className="checkBtn" onClick={contextDataHandler}>
          Check Weather
        </button>
      </div>

      <CityContext.Provider value={contextData}>
        <WeatherList />
      </CityContext.Provider>
    </div>
  );
}

export default App;
