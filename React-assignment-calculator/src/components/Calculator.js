import React, { useState } from "react";
import "../index.css";

const Calculator = (prop) => {
  const [newInput, setNewInput] = useState("");

  const show = (e) => {
    e.preventDefault();

    // const input1 = document.querySelector("#input1").value;
    // const input2 = document.querySelector("#input2").value;
    // const operation = document.querySelector("#operation").value;

    const answer = "15-05";

    const int1 = answer.slice(0, answer.indexOf("-"));
    const int2 = answer.slice(answer.indexOf("-") + 1);

    setNewInput(parseInt(int1) - parseInt(int2));

    // switch (operation) {
    //   case "+":
    //     setNewInput(parseInt(input1) + parseInt(input2));
    //     break;
    //   case "-":
    //     setNewInput(parseInt(input1) - parseInt(input2));
    //     break;
    //   case "*":
    //     setNewInput(parseInt(input1) * parseInt(input2));
    //     break;
    //   case "/":
    //     setNewInput(parseInt(input1) / parseInt(input2));
    //     break;
    //   default:
    //     setNewInput(parseInt("Do Nothing"));
    // }
  };

  return (
    <>
      <form onSubmit={show}>
        <h1>Hello World {prop.test} </h1>

        <label htmlFor="input1">Input 1: </label>
        <input type="number" id="input1" />

        <label htmlFor="operation">Operation: </label>
        <select id="operation">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>

        <label htmlFor="input2">Input 2: </label>
        <input type="number" id="input2" />

        <input type="submit" value="Calculate" />
      </form>
      <ul>{newInput}</ul>
    </>
  );
};
export default Calculator;
