import React from "react";
import "./App.css";

export default function DailyOverview() {
  return (
    <div className="DailyOverview">
      <div className="daily-overview">
        <div className="row">
          <div className="col-6">
            <h1>London</h1>
            <h5>Cloudy</h5>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex flex-row weather-temperature">
                <div className="icon-container">
                  <img
                    src="	http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                    alt="weather-icon"
                    id="icon"
                  />
                </div>
                <div className="temperature-container">
                  <strong id="daily-temp">1</strong>
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
                <li id="todays-date">Tuesday 17 Jan</li>
                <li id="current-time">11:00</li>
              </ul>
              <ul className="conditions">
                <li>
                  Humidity: <span id="humidity">70</span>%
                </li>
                <li>
                  Wind: <span id="wind">6</span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
