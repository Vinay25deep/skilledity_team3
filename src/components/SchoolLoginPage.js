import React from 'react';
import { useNavigate } from "react-router-dom";
import './SchoolLoginPage.css'; 


const SchoolLoginPage = () => {
  const navigate = useNavigate()
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
          <div className="form-group-inline">
            <div className="forgot-password" onClick={() => navigate('forgot-password')}>
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </div>
          <button type="submit" onClick={(e) => {
              e.preventDefault(); 
              const schoolName = "Apeejay School, NOIDA"; // sample school name
              navigate('/dashboard', { state: { schoolName } });}}>Login</button>
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
