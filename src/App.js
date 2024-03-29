import React from "react";
import "./App.css";
import SearchCity from "./SearchCity";
import background from "./images/sky1.jpg";

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <div className="container">
        <div className="card">
          <div className="card-body">
            <SearchCity defaultCity="London" />
          </div>
        </div>
      </div>
      <div className="footer">
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
