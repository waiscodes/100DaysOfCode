import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./components/Calculator";

ReactDOM.render(
  <React.StrictMode>
    <Calculator name="Big Shaq" />
  </React.StrictMode>,
  document.getElementById("root")
);
console.log("quick maths");
const form = document.querySelector("form");

form.addEventListener("Submit", (SumbitEvent) => {
  SumbitEvent.preventDefault();

  console.log("quick maths");
});
