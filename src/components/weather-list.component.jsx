import axios from "axios";
import { useEffect, useState, useContext } from "react";
import WeatherCard from "./weather-card.component";
import CityContext from "../contexts/city.context";
import "../styles/list.styles.css";

const WeatherList = () => {
  const [weather, setWeather] = useState([]);
  const cityData = useContext(CityContext);

  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: { q: `${cityData}`, days: "7" },
    headers: {
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      "X-RapidAPI-Key": "d8d4f93b5amsh199e523cd275a6ap1369d9jsnaf4172463f6e",
    },
  };

  const fetchDatas = () => {
    axios
      .request(options)
      .then(function (response) {
        setWeather(response.data.forecast.forecastday);
        console.log(weather);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchDatas();
  }, [cityData]);

  return (
    <div className="card-list">
      {weather.map((elements) => (
        <WeatherCard
          date={elements.date}
          degree={elements.day.avgtemp_c}
          icon={elements.day.condition.icon}
          status={elements.day.condition.text}
        />
      ))}
    </div>
  );
};

export default WeatherList;
