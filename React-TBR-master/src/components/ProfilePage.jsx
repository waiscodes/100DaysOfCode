import React from "react";
import "../css/ProfilePage.css";

const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <form>
          <label htmlFor="name">Name</label>
          <p>Full Name</p>
          <input type="text" name="name" id="name" />

          <label htmlFor="username">Username</label>
          <p>UserName</p>
          <input type="text" name="username" id="username" />

          <label htmlFor="email">Email</label>
          <p>Email</p>
          <input type="email" name="email" id="email" />

          <label htmlFor="password">Password</label>
          <p>Password</p>
          <input type="password" name="password" id="password" />

          <input type="submit" value="Sumbit" />
        </form>
      </div>
    </>
  );
};

export default Profile;
