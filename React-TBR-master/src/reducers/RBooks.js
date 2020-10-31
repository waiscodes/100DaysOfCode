import React from "react";

const Books = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOKS":
      const newBook = {
        title: action.title,
        author: action.author,
        genre: action.genre,
        rating: action.rating,
      };
      return [...state, newBook];
    default:
      return state;
  }
};

export default Books;
