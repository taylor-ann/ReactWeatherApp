import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="search-form" class="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="City..."
                    class="form-control"
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    class="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1 id="city"></h1>
              <ul>
                <li>
                  <span id="date"></span>
                </li>
                <li id="description"></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <img src="" alt="Clear" id="icon" class="float-left" />
                  <div className="float-left">
                    <strong id="temperature"></strong>
                    <span className="units">°C</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity"></span>%
                  </li>
                  <li>
                    Wind: <span id="wind"></span> m/h
                  </li>
                </ul>
              </div>
              <div className="weather-forcast" id="forecast"></div>
            </div>
          </div>
          <small>
            <a
              href="https://github.com/taylor-ann/ReactWeatherApp"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by Taylor Mattscheck
          </small>
        </div>
      </div>
    </div>
  );
}
