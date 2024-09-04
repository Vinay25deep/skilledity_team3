import React from "react";
import "./schoolLogin.css";

function SchoolLogin() {
  return (
    <section className="hero-section">
      <div className="hero-content">
      <div className="sub-card-text">
        <h1>Welcome to the <span>Login Portal!</span></h1>
        <p>Please select your login type to continue.</p>
      </div>
      </div>
      <div className="card">
       <div className="sub-card">
            <img src='./SVGs/undraw_exams_re_4ios.svg' alt="student" className="card-img"></img>
            <div className="sub-card-text">
            <h2 className='card-title'>Student Login</h2>
            <p className="card-text">Accessing your student portal.</p>
       </div>
       <a href="/"><button className="btnLogin">Login</button></a>
       </div>
       <div className="sub-card">
            <img src='./SVGs/undraw_building_re_xfcm.svg' alt="school" className="card-img"></img>
            <div className="sub-card-text">
            <h2 className='card-title'>School Login</h2>
            <p className="card-text">Accessing your school portal.</p>
            </div>
            <a href="/"><button className="btnLogin">Login</button></a>
       </div>
       <div className="sub-card">
            <img src='./SVGs/undraw_add_information_j2wg.svg' alt="" className="card-img"></img>
            <div className="sub-card-text">
            <h2 className='card-title'>Admin Login</h2>
            <p className="card-text">Accessing your admin portal.</p>
            </div>
            <a href="/"><button className="btnLogin">Login</button></a>
       </div>
    </div>
    </section>
  );
}

export default SchoolLogin;