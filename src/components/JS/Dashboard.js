import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../CSS/Dashboard.css';
import Cookies from 'js-cookie'

function Dashboard() {
  const navigate = useNavigate();
  const school_name = useSelector((state) => state.auth.school_name);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to your <span>dashboard!</span></h1>
        <p className="school-name">{school_name}</p>
      </header>


      <div className="dashboard-content">
        <div className="card">
        <div className='h2-p'>
          <h2>Student Details</h2>
          <p>Click the button below to edit student details</p>
          </div>
          <button className="btn" onClick={() => navigate('/student-details')}>Details</button>
        </div>

        <div className="card">
        <div className='h2-p'>
          <h2>Register Student</h2>
          <p>Click the button below to register the student</p>
          </div>
          <div className='button-group'>
          <button className="btn-csv" onClick={() => {
            navigate('/upload-csv')
            }}>Upload CSV</button>
          <button className="btn-manual" onClick={() => navigate('/welcome')}>Manual</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
