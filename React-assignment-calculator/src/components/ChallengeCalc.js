import React, { useState } from "react";

const ChallengeCalc = () => {
  const [newEquation, setNewEquation] = useState("");

  const Calculate = (e) => {
    e.preventDefault();

    const opp = document.querySelector("#opp").value;
    // let answer = 0;

    if (opp.includes("-")) {
      const opp1 = opp.slice(0, opp.indexOf("-"));
      const opp2 = opp.slice(opp.indexOf("-") + 1, opp.length);
      setNewEquation(parseInt(opp1) - parseInt(opp2));
    } else if (opp.includes("+")) {
      const opp1 = opp.slice(0, opp.indexOf("+"));
      const opp2 = opp.slice(opp.indexOf("+") + 1, opp.length);
      setNewEquation(parseInt(opp1) + parseInt(opp2));
    } else if (opp.includes("*")) {
      const opp1 = opp.slice(0, opp.indexOf("*"));
      const opp2 = opp.slice(opp.indexOf("*") + 1, opp.length);
      setNewEquation(parseInt(opp1) * parseInt(opp2));
    } else if (opp.includes("/")) {
      const opp1 = opp.slice(0, opp.indexOf("/"));
      const opp2 = opp.slice(opp.indexOf("/") + 1, opp.length);
      setNewEquation(parseInt(opp1) / parseInt(opp2));
    } else {
      setNewEquation("Get it together my guy");
    }
  };

  return (
    <>
      <h1>It's Simple Mathematics</h1>
      <form onSubmit={Calculate}>
        <label htmlFor="opp">Input Operation: </label>
        <input type="text" id="opp" />
        <input type="submit" value="Calculate" />
        <p>{newEquation}</p>
      </form>
    </>
  );
};

export default ChallengeCalc;
