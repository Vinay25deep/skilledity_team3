import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const  schoolName  = 'Apeejay School, NOIDA' ;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to your <span>dashboard!</span></h1>
        <p className="school-name">{schoolName}</p>
      </header>

      <div className="dashboard-content">
        <div className="card">
          <h2>Student Details</h2>
          <p>Click the button below to edit student details</p>
          <button className="btn" onClick={() => navigate('/details-student')}>Details</button>
        </div>

        <div className="card">
          <h2>Register Student</h2>
          <p>Click the button below to register the student</p>
          <button className="btn" onClick={() => navigate('/register-student')}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
