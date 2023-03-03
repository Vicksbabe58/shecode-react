import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WeatherSearch from "./WeatherSearch";
import reportWebVitals from "./reportWebVitals";
import { ColorRing } from "react-loader-spinner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
      <WeatherSearch />
      <small>
        <a
          href="https://vicksbabe58.github.io/shecode-react/"
          rel="noreferrer"
          target="_blank"
        >
          Open-source code
        </a>
        by Victory Ilikah
      </small>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
