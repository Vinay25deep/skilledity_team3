import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPortal.css";

function LoginPortal() {
  const navigate = useNavigate()
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="sub-card-text">
          <h1>
            Welcome to the <span>Login Portal!</span>
          </h1>
          <p>Please select your login type to continue.</p>
        </div>
      </div>
      <div className="card">
        <div className="sub-card">
          <img
            src="./SVGs/undraw_teacher_re_sico 1.svg"
            alt="student"
            className="card-img"
            draggable="false"
          ></img>
          <div className="sub-card-text">
            <h2 className="card-title">Student Login</h2> 
            <p className="card-text">Accessing your student portal.</p>
          </div>
          <a href="/student-login">
            <button className="btnLogin">Login</button>
          </a>
        </div>
        <div className="sub-card">
          <img
            src="./SVGs/undraw_building_re_xfcm.svg"
            alt="school"
            className="card-img"
            draggable="false"
          ></img>
          <div className="sub-card-text">
            <h2 className="card-title">School Login</h2>
            <p className="card-text">Accessing your school portal.</p>
          </div>
          <a href="/school-login">
            <button  onClick={() => navigate('school-login')} className="btnLogin">Login</button>
          </a>
        </div>
        <div className="sub-card">
          <img
            src="./SVGs/undraw_teaching_re_g7e3.svg"
            alt=""
            className="card-img"
            draggable="false"
          ></img>
          <div className="sub-card-text">
            <h2 className="card-title">Admin Login</h2>
            <p className="card-text">Accessing your admin portal.</p>
          </div>
          <a href="/admin-login">
            <button onClick={() => navigate('admin-login')} className="btnLogin">Login</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LoginPortal;
