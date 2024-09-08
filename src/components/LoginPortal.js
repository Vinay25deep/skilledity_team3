import React from "react";
import "./LoginPortal.css";
import { Link } from "react-router-dom";
function LoginPortal() {
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
            src="./SVGs/undraw_exams_re_4ios.svg"
            alt="student"
            className="card-img"
            draggable="false"
          ></img>
          <div className="sub-card-text">
            <h2 className="card-title">Student Login</h2>
            <p className="card-text">Accessing your student portal.</p>
          </div>
          <Link to="/SchoolLoginPage">
            <button className="btnLogin">Login</button>
          </Link>
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
          <Link to="/SchoolLoginPage">
            <button className="btnLogin">Login</button>
          </Link>
        </div>
        <div className="sub-card">
          <img
            src="./SVGs/undraw_add_information_j2wg.svg"
            alt=""
            className="card-img"
            draggable="false"
          ></img>
          <div className="sub-card-text">
            <h2 className="card-title">Admin Login</h2>
            <p className="card-text">Accessing your admin portal.</p>
          </div>
          <Link to="/SchoolLoginPage">
            <button className="btnLogin">Login</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LoginPortal;
