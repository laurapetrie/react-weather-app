import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeeklyForecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={46} />
      <div className="WeeklyForecast-temperatures">
        <span className="WeeklyForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeeklyForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
