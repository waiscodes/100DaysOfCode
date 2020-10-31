import React from "react";
import { connect } from "react-redux";
import { AddBooks } from "../actions/AAddBooks";
import "../css/AddNewBook.css";

const AddNewBook = (props) => {
  const AddTBR = (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value,
      author = document.querySelector("#author").value,
      genre = document.querySelector("#genre").value;

    props.library.dispatch(AddBooks(title, author, genre));
  };

  return (
    <>
      <section className="add-book">
        <form onSubmit={AddTBR}>
          <label htmlFor="title" className="screen-reader-text">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter the Title"
          />

          <label htmlFor="author" className="screen-reader-text">
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            placeholder="Enter the Author"
          />

          <label htmlFor="genre" className="screen-reader-text">
            Genre
          </label>
          <select name="genre" id="genre">
            <option value="fantasy">Fantasy</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="non-finction">Non-Fiction</option>
          </select>

          <input type="submit" value="Submit" />
        </form>
      </section>
    </>
  );
};

export default connect((state) => ({
  library: state.library,
}))(AddNewBook);
