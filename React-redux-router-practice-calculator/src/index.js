import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./components/Calculator";
import { createStore } from "redux";
import CalcListReducer from "./reducer/ReducerCalcList";
import { Provider } from "react-redux";
import AnswersList from "./components/AnswersList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";

const myStore = createStore(
  CalcListReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
myStore.subscribe(() => console.log(myStore.getState));

ReactDOM.render(
  <Provider store={myStore}>
    <Router>
      <section className="mainSection">
        <h1>React-Redux Calculator</h1>
        <Nav />
        <Route path="/" component={() => <Calculator />} exact />
        <Route path="/answers-list" component={AnswersList} />
      </section>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
