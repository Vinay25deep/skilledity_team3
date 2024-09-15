import React from 'react';
import { useNavigate } from "react-router-dom";
import './ForgotPasswordPage.css'; 


const ForgotPasswordPage = () => {
  const navigate = useNavigate()
  return (
    <div className="FPP-container">
      <div className="email-form">
        <h2>Forgot Password</h2>  
        
        <div>
        <form className='container'> 
          <div className="FPP-form-group">
            <label id='email-head'htmlFor="EmailIdfgp">Email</label>
            <input type="Email" id="EmailIdfgp" placeholder="Enter your email address" />
          </div>
          
          <a className="back-button" href="#!" onClick={(e) => {
    e.preventDefault(); 
    navigate('/school-login'); 
  }}>
             <img src="/arrow-long-left.png" alt="Back Arrow" className="arrow-icon" />
             <span>Back to School Login</span>
          </a>
          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
      <div className="login-image">
        <img src="./SVGs/undraw_enter_uhqk.svg" alt="Login illustration" />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
