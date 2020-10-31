import React, { useState } from "react";

const Calculator = () => {
  const [usrInput, setUsrInput] = useState("0");
  const [answer, setAnswer] = useState("0");

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

  const LiveUpdate = (e) => {
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

  return (
    <>
      <h1>Live Calculator</h1>
      <p>
        {usrInput} = {answer}
      </p>
      <form>
        <label htmlFor="input">Add a Calculation with 2 Operands</label> <br />
        <input type="text" id="input" name="input" onChange={LiveUpdate} />
      </form>
      <ul></ul>
    </>
  );
};

export default Calculator;
