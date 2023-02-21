import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                className="form-control"
                placeholder="Please enter a location"
                autocomplete="off"
                autoFocus="on"
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
                <i className="fa-solid fa-location-dot current-location-icon"></i>
              </a>
            </div>
          </div>
        </form>
        <div className="DailyOverview">
          <div className="daily-overview">
            <div className="row">
              <div className="col-6">
                <h1>{weatherData.city}</h1>
                <h5 className="text-capitalize">{weatherData.description}</h5>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="d-flex flex-row weather-temperature">
                    <div className="icon-container">
                      <img
                        src={weatherData.icon}
                        alt={weatherData.description}
                        id="icon"
                      />
                    </div>
                    <div className="temperature-container">
                      <strong id="daily-temp">
                        {Math.round(weatherData.temperature)}
                      </strong>
                      <span className="units">
                        <a href="/" id="celsius-link" class="active">
                          °C
                        </a>{" "}
                        |
                        <a href="/" id="fahrenheit-link">
                          °F
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <ul className="date-time">
                    <li>
                      <FormattedDate date={weatherData.date} />
                    </li>
                  </ul>
                  <ul className="conditions">
                    <li>
                      Humidity:{" "}
                      <span id="humidity">{weatherData.humidity}</span>%
                    </li>
                    <li>
                      Windspeed:{" "}
                      <span id="wind">{Math.round(weatherData.wind)}</span> km/h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e7cba0f4344b9ae720f19t5d48co46c3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
