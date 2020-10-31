import React from "react";

const AddBooks = (title, author, genre, rating) => {
  return {
    type: "ADD_BOOKS",
    title: title,
    author: author,
    genre: genre,
    rating: rating,
  };
};

export { AddBooks };
