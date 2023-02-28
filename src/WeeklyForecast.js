import React from "react";
import "./WeeklyForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeeklyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "e7cba0f4344b9ae720f19t5d48co46c3";

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.coordinates.longitude}&lat=${props.coordinates.latitude}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeeklyForecast">
      <div className="row">
        <div className="col">
          <div className="WeeklyForecast-day">Thu</div>
          <WeatherIcon code="broken-clouds-day" size={46} />
          <div className="WeeklyForecast-temperatures">
            <span className="WeeklyForecast-temperature-max">19°</span>
            <span className="WeeklyForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
