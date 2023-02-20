import React from "react";
import "./CitySearch.css";

export default function CitySearch() {
  return (
    <div className="CitySearch">
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
    </div>
  );
}
