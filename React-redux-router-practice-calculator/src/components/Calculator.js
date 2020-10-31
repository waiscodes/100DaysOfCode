import React, { useState } from "react";
import { connect } from "react-redux";
import { AddCalcList } from "../action/ActionCalcList";

const Calculator = (props) => {
  const [usrInput, setUsrInput] = useState("0");
  const [answer, setAnswer] = useState("0");
  const fullCalc = `${usrInput} = ${answer}`;

  const Parser = (value) => {
    if (value.includes("+")) {
      let arr = value.split("+");
      setAnswer(Number(arr[0]) + Number(arr[1]));
    } else if (value.includes("-")) {
      let arr = value.split("-");
      setAnswer(Number(arr[0]) - Number(arr[1]));
    } else if (value.includes("*")) {
      let arr = value.split("*");
      setAnswer(Number(arr[0]) * Number(arr[1]));
    } else if (value.includes("/")) {
      let arr = value.split("/");
      setAnswer(Number(arr[0]) / Number(arr[1]));
    }
  };

  const LiveCalc = (e) => {
    const value = e.target.value;
    setUsrInput(value);

    if (
      !value.includes("+") &&
      !value.includes("-") &&
      !value.includes("*") &&
      !value.includes("/")
    ) {
      setAnswer(value);
    } else {
      Parser(value);
    }
  };

  const submitToDo = (event) => {
    event.preventDefault();
    props.dispatch(AddCalcList(fullCalc));

    setUsrInput("");
    setAnswer("");
  };

  return (
    <>
      <p>
        <span className="userInput">{usrInput} </span>
        <span className="answer">{answer}</span>
      </p>
      <form onSubmit={submitToDo}>
        <label htmlFor="inputField">Enter an Equation: </label>
        <input
          type="text"
          id="inputField"
          value={usrInput}
          onChange={LiveCalc}
          required
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default connect((state) => {
  return { ansProps: state };
})(Calculator);
