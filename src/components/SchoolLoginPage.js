import React from "react";
import "./SchoolLoginPage.css"; // Add CSS for styling the page
import { Link } from "react-router-dom";
const SchoolLoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="titleLogin">Welcome!</h1>
        <div className="subTitleContainer">
          <h3 className="signInTitle">Sign in to</h3>
          <p className="signInSubText"> the School Login portal</p>
        </div>
        <div>
          <form className="container">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
              />
            </div>
            <Link to="/">
              <p className="forgotPassword">Forgot Password?</p>
            </Link>
          </form>
          <Link to="/">
            <button type="submit">Log in</button>
          </Link>
        </div>
      </div>
      <div className="login-image">
        <img src="./SVGs/undraw_enter_uhqk.svg" alt="Login illustration" />
      </div>
    </div>
  );
};

export default SchoolLoginPage;
