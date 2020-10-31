import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/answers-list">Old Answers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
