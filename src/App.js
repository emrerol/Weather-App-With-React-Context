import "./App.css";
import { useState } from "react";
import CityContext from "./contexts/city.context";
import WeatherList from "./components/weather-list.component";

function App() {
  const [city, setCity] = useState("London");
  const cityHandler = (event) => {
    setCity(event.target.value);
  };
  return (
    <>
      <input
        className="main-input"
        type="text"
        value={city}
        onChange={cityHandler}
      />
      <CityContext.Provider value={city}>
        <WeatherList />
      </CityContext.Provider>{" "}
    </>
  );
}

export default App;
