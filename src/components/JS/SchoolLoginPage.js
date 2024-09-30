import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setSchoolData, setAuth } from '../../redux/reducers/authSlice';
import {jwtDecode} from 'jwt-decode'; // Ensure this is the correct import
import '../CSS/SchoolLoginPage.css';

const SchoolLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to get a specific cookie by name
  const getCookie = (name) => {
    const cookies = document.cookie
      .split("; ")
      .map(cookie => {
        console.log('Cookie:', cookie); // Log each cookie for debugging
        return cookie;
      })
      .find(row => row.startsWith(`${name}=`)); // Use template literals for the cookie name

    return cookies ? cookies.split("=")[1] : null; // Return the value of the cookie
  };

  const checkForToken = (attempts = 5) => {
    const token = getCookie('jwt'); // Get JWT from the cookie named 'jwt'
    if (token) {
      return token; // Return the token if found
    } else if (attempts > 0) {
      setTimeout(() => checkForToken(attempts - 1), 500); // Retry after 500 ms
    }
    return null; // No token found after retries
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://api.skilledity.in/school-login', {
        email: username,
        password: password,
      }, { 
        withCredentials: true, // Ensure cookies are sent and received
      });

      // Check for token after login
      const token = checkForToken();
      if (token) {
        const tokenInfo = jwtDecode(token); // Decode the token
        const { schoolName, schoolId } = tokenInfo; // Extract data from the token
        dispatch(setSchoolData({ school_name: schoolName, school_id: schoolId }));
        dispatch(setAuth(true));
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        setError('Failed to retrieve token. Please log in again.');
      }

    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Welcome!</h1>
        <h3>Sign in to</h3>
        <p> the School Login portal</p>
        <form className="container" onSubmit={handleLogin}> 
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              placeholder="Enter your username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <div className="form-group-inline">
            <div className="forgot-password" onClick={() => navigate('forgot-password')}>
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </div>
          {error && (
            <p className="error-message" style={{ color: 'red', fontFamily: 'Montserrat' }}>
              {error}
            </p>
          )}
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="login-image">
        <img src="./SVGs/undraw_enter_uhqk.svg" alt="LOGIN" />
      </div>
    </div>
  );
};

export default SchoolLoginPage;
