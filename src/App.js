import React from "react";
import "./App.css";

import CitySearch from "./CitySearch";
import DailyOverview from "./DailyOverview";
import WeeklyForecast from "./WeeklyForecast";
import background from "./images/sky1.jpg";

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="container">
        <div className="card">
          <div className="card-body">
            <CitySearch />
            <DailyOverview />
            <WeeklyForecast />
          </div>
        </div>
      </div>
      <div>
        <span className="github-link">
          <a
            href="https://github.com/laurapetrie/react-weather-app"
            target="_blank"
            className="link"
            rel="noreferrer"
          >
            Open-source code
          </a>
          <span className="creator-name"> by Laura Petrie</span>
        </span>
        <script src="src/index.js"></script>
      </div>
    </div>
  );
}
