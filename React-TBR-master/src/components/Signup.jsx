import React from "react";
import { connect } from "react-redux";
import { CreateProfile } from "../actions/AProfile";
import "../css/Signup.css";

const Signup = (store) => {
  const SumbitHandler = (e) => {
    e.preventDefault();

    const usrName = document.querySelector("#name").value,
      usrEmail = document.querySelector("#email").value,
      usrPassword = document.querySelector("#password").value;

    store.dispatch(CreateProfile(usrName, usrEmail, usrPassword));
  };
  return (
    <>
      <section className="signup">
        <form onSubmit={SumbitHandler}>
          <label htmlFor="name" className="screen-reader-text">
            Name
          </label>
          <input type="text" name="name" id="name" placeholder="Name" />

          <label htmlFor="email" className="screen-reader-text">
            Email
          </label>
          <input type="email" name="email" id="email" placeholder="Email" />

          <label htmlFor="password" className="screen-reader-text">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />

          <input type="submit" value="Signup" />
        </form>
      </section>
    </>
  );
};

export default connect((state) => ({ store: state }))(Signup);
