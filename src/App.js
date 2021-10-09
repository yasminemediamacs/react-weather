import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is created by{" "}
          <a href="https://kind-wing-d85be2.netlify.app">Yasmine Senter</a> and
          is{" "}
          <a
            href="https://github.com/yasminemediamacs/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
