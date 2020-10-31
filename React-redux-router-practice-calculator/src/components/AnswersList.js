import React from "react";
import { connect } from "react-redux";

const AnswersList = (props) => {
  return (
    <>
      <h4>List of Old Answers</h4>
      <ul>
        {props.ansProps.map((ansProps, index) => (
          <li key={index}>{ansProps.answer}</li>
        ))}
      </ul>
    </>
  );
};

export default connect((state) => {
  return { ansProps: state };
})(AnswersList);
