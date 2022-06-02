import axios from "axios";
import { useEffect, useState, useContext } from "react";
import WeatherCard from "./weather-card.component";
import CityContext from "../contexts/city.context";

const WeatherList = () => {
  const [weather, setWeather] = useState([]);
  const cityData = useContext(CityContext);

  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: { q: `${cityData}`, days: "3" },
    headers: {
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      "X-RapidAPI-Key": "d8d4f93b5amsh199e523cd275a6ap1369d9jsnaf4172463f6e",
    },
  };

  const fetchDatas = () =>
    axios
      .request(options)
      .then(function (response) {
        setWeather(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

  useEffect(() => {
    fetchDatas();
  }, [cityData]);
  return <div></div>;
};

export default WeatherList;
