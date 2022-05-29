import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const initialSelectedColor = "red";
const colorPickerOptions = [
  "blue",
  "green",
  "orange",
  "red",
  "lightpink",
  // "#5d77f5",
  // "#0fd085",
  // "#ffba5b",
  // "#f95e62",
  // "lightpink",
];

root.render(
  <React.StrictMode>
    <App
      initialSelectedColor={initialSelectedColor}
      colorPickerOptions={colorPickerOptions}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
