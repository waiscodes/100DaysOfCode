import React from "react";
import { connect } from "react-redux";

const BookCard = (props) => {
  return (
    <>
      <h2>This is a book Card</h2>
    </>
  );
};

export default connect()(BookCard);
