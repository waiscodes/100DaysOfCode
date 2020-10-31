import React from "react";
import { connect } from "react-redux";
import "../css/HomePage.css";

const HomePage = () => {
  const SearchEvent = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="home">
        <form onSubmit={SearchEvent}>
          <label htmlFor="searchbar" className="screen-reader-text">
            Search Bar
          </label>
          <input
            type="search"
            name="searchbar"
            id="searchbar"
            placeholder="Search"
          />
        </form>
        <section className="feed">
          <h2>This is the HomePage</h2>
          <ul>
            Feed UL
            {/* This is a UL that the feed will go on. It will be updated via state, and
        it'll most likely contain book recommendations, blogs, articles etc. */}
          </ul>
        </section>
      </section>
    </>
  );
};

export default connect()(HomePage);
