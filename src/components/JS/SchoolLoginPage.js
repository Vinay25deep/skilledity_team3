import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setSchoolData, setAuth } from '../../redux/reducers/authSlice';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import '../CSS/SchoolLoginPage.css';

const SchoolLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

   const extractSchoolDataFromToken = (dispatch) => {
    // Extract token from the cookies
    const cookies = document.cookie.split('; ').find(row => row.startsWith('jwt='));
    if (cookies) {
      const token = cookies.split('=')[1]; // Get JWT token
  
      // Decode the token
      const decodedToken = jwtDecode(token);
  
      // Extract schoolname and schoolid from decoded token
      const { schoolName, schoolId } = decodedToken;
  
      // Dispatch school data to the Redux store
      dispatch(setSchoolData(schoolName, schoolId));

      dispatch(setAuth(true));
      
      console.log('Cookie token:', token);
    } else {
      console.error('JWT token not found in cookies.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.skilledity.in/school-login', {
        email: username,
        password: password,
      }, { 
        withCredentials: true, // Ensures cookies are sent and received
      });

      if (response.status === 200) {
        const { schoolName, schoolId } = response.data;

        // Dispatch school data to Redux store
        dispatch(setSchoolData({ school_name: schoolName, school_id: schoolId }));

        // Retrieve the token or session data from the cookie
          // Extract and store school data from JWT token in Redux store
          extractSchoolDataFromToken(dispatch);

        console.log('Login response:', response); // Check the response for debugging

      } else {
        setError('Invalid username or password');
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
