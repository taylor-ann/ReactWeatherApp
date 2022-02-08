import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dunedin" />
        <footer>
          <small>
            <a
              href="https://github.com/taylor-ann/ReactWeatherApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>
            by Taylor Mattscheck
          </small>
        </footer>
      </div>
    </div>
  );
}
