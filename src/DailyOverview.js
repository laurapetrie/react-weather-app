import React from "react";
import "./DailyOverview.css";
import FormattedDate from "./FormattedDate";
import DailyTemperature from "./DailyTemperature";
import WeatherIcon from "./WeatherIcon";

export default function DailyOverview(props) {
  return (
    <div className="DailyOverview">
      <div className="daily-overview">
        <div className="row">
          <div className="col-6">
            <h1>{props.data.city}</h1>
            <h5 className="text-capitalize">{props.data.description}</h5>
          </div>
          <div className="row weather-info">
            <div className="col-6">
              <div className="d-flex flex-row weather-temperature">
                <div className="icon-container">
                  <WeatherIcon code={props.data.icon} size={70} />
                </div>
                <div className="temperature-container">
                  <DailyTemperature celsius={props.data.temperature} />
                </div>
              </div>
            </div>

            <div className="col-6">
              <ul className="date-time">
                <li>
                  <FormattedDate date={props.data.date} />
                </li>
              </ul>
              <ul className="conditions">
                <li>
                  Humidity: <span id="humidity">{props.data.humidity}</span>%
                </li>
                <li>
                  Windspeed:{" "}
                  <span id="wind">{Math.round(props.data.wind)}</span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
