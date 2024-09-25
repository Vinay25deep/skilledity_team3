import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';  // Import useDispatch to dispatch Redux actions
import axios from 'axios';
import { setSchoolData } from '../../redux/reducers/authSlice';  // Import the Redux action
import '../CSS/SchoolLoginPage.css'; 

const SchoolLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();  // Create a dispatch function

  const handleLogin = async (e) => {
    console.log(username);
    console.log(password);
    e.preventDefault();
    try {
      const response = await axios.post('https://api.skilledity.in/login/school', {
        email: username,
        password: password,
      });

      const { passwords_match, school_name, school_id } = response.data;

      if (passwords_match) {
        // Dispatch the data to the Redux store
        dispatch(setSchoolData({ schoolName: school_name, schoolId: school_id }));
        navigate('/dashboard');
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
        <div>
        <form className='container' onSubmit={handleLogin}> 
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              placeholder="Enter your username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
          </div>
          <div className="form-group-inline">
            <div className="forgot-password" onClick={() => navigate('forgot-password')}>
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </div>
          {error && <p className="error-message" style={error ? { color: 'red', fontFamily: 'Montserrat' } : { display: 'none' }}
          >{error}</p>} {/* Display error if exists */}
          <button type="submit">Login</button> {/* No need for onClick as we're using onSubmit */}
        </form>
        </div>
      </div>
      <div className="login-image">
        <img src="./SVGs/undraw_enter_uhqk.svg" alt="LOGIN"/>
      </div>
    </div>
  );
};

export default SchoolLoginPage;
