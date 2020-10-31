import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./css/index.css";

import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import BookCard from "./components/BookCard";
import AddNewBook from "./components/AddNewBook";
import Profile from "./components/ProfilePage";

import RUsrProfile from "./reducers/RUsrProfile";
import Books from "./reducers/RBooks";

const rootReducer = combineReducers({
  user: RUsrProfile,
  library: Books,
});

const myStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={myStore}>
    <Signup />
    <HomePage />
    <BookCard />
    <AddNewBook />
    <Profile />
  </Provider>,
  document.getElementById("root")
);
