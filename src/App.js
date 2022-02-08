import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dunedin" />
        <footer>
          This was coded by{" "}
          <a
            href="https://www.linkedin.com/in/taylor-mattscheck-7b1a781a1/"
            target="_blank"
            rel="noreferrer"
          >
            Priyanka{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/taylor-ann/ReactWeatherApp"
            target="_blank"
            rel="noreferrer"
          >
            Open Sourced on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
