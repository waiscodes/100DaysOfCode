import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./components/Calculator";
import { createStore } from "redux";
import CalcListReducer from "./reducer/ReducerCalcList";
import { Provider } from "react-redux";
import AnswersList from "./components/AnswersList";

const myStore = createStore(
  CalcListReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
myStore.subscribe(() => console.log(myStore.getState));

ReactDOM.render(
  <Provider store={myStore}>
    <Calculator title="React-Redux Calculator" />
    <AnswersList />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
