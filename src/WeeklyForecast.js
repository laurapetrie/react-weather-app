import React from "react";
import "./WeeklyForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeeklyForecast() {
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
