import React from "react";
import "../index.css";

const Calculator = (props) => {
  return (
    <section className="calculator">
      <h1>{props.name} Let's Do Some Quick Maths!</h1>

      <form>
        {/* Got HTML for from an article on Inputs. Citation #1 */}
        <label htmlFor="input1">Input 1: </label>
        <input type="number" id="input1" required />

        <label htmlFor="operation">Pick Operation: </label>
        <select id="operation">
          <option value="/">Divided By</option>
          <option value="*">Times</option>
          <option value="+" defaultValue>
            Plus
          </option>
          <option value="-">Minus</option>
        </select>

        <label htmlFor="input2">Input 2: </label>
        <input type="number" id="input2" required />

        <input type="submit" value="QuickMaths" />
      </form>
    </section>
  );
};
export default Calculator;

/*
Citations

1: htmlFor
    I looked up input elements using React and I found this there
    Link: https://www.varvet.com/blog/format-numbers-in-input-fields-using-react/
    it is like that because "for" is a keyword in Javascript

*/
