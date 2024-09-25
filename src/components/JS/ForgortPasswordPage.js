import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../CSS/ForgotPasswordPage.css'; 


const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error messages
    setSuccessMessage(''); // Clear any previous success messages

    try {
      const response = await axios.post('https://api.skilledity.in/school/register-student', { email });

      // Handle success response from backend
      if (response.data && response.data.success) {
        setSuccessMessage('Password reset link has been sent to your email.');
      } else {
        setErrorMessage(response.data.message || 'Failed to send reset link. Please try again.');
      }
    } catch (error) {
      // Handle error from backend
      setErrorMessage('Error sending reset link. Please try again later.');
    }
  };

  return (
    <div className="FPP-container">
      <div className="email-form">
        <h2>Forgot Password</h2>  
        <p>Reset your Password with a link</p>
        <div>
          <form className='container' onSubmit={handleSubmit}>
            <div className="FPP-form-group">
              <label id='email-head' htmlFor="EmailIdfgp">Email</label>
              <input 
                type="email" 
                id="EmailIdfgp" 
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                required 
              />
            </div>

            {errorMessage && <p style={errorMessage ? { color: 'red', fontFamily: 'Montserrat' } : { display: 'none' }}
 className="error-message">{errorMessage}</p>}
            {successMessage && <p style={successMessage ? { color: 'red', fontFamily: 'Montserrat' } : { display: 'none' }}
 className="success-message">{successMessage}</p>}
            
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
