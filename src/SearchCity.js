import React, { useState } from "react";
import axios from "axios";
import DailyOverview from "./DailyOverview";
import WeeklyForecast from "./WeeklyForecast";
import "./SearchCity.css";

export default function SearchCity(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const apiKey = "e7cba0f4344b9ae720f19t5d48co46c3";

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      coordinates: response.data.coordinates,
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
  }

  function search() {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function currentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentCity);
  }

  function currentCity(position) {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${position.coords.longitude}&lat=${position.coords.latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="SearchCity">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                className="form-control"
                placeholder="Please enter a city"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
            <div className="col-1">
              <a href="/">
                <i
                  className="fa-solid fa-location-dot current-location-icon"
                  onClick={currentLocation}
                ></i>
              </a>
            </div>
          </div>
        </form>
        <DailyOverview data={weatherData} />
        <WeeklyForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
