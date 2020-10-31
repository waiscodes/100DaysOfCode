import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./components/Calculator";
import ChallengeCalc from "./components/ChallengeCalc";
import CalculateLive from "./components/CalculateLive";

ReactDOM.render(
  <React.StrictMode>
    <Calculator test="test" />
    <ChallengeCalc />
    <CalculateLive />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
