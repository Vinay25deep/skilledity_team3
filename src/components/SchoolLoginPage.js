import React from 'react';
import './SchoolLoginPage.css'; // Add CSS for styling the page

const SchoolLoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Welcome!</h1>
        <h3>Sign in to</h3>
        <p> the School Login portal</p>
        <div>
        <form className='container'> 
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your Password" />
          </div>
          <div className="form-group2">
            <input type="checkbox" id="remember-me" />
            <label id="rememberme" htmlFor="remember-me">Remember Me</label>
          </div>
          <button type="submit">Log in</button>
        </form>
        </div>
      </div>
      <div className="login-image">
        <img src="./SVGs/undraw_enter_uhqk.svg" alt="Login illustration" />
      </div>
    </div>
  );
};

export default SchoolLoginPage;
