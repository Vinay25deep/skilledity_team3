import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../CSS/Header.css";

function Header() {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  let buttonText = "Logout";
  if (location.pathname === "/login" ) {
    buttonText = "Login";
  } else if(location.pathname === "/school-login"){
    buttonText = "Login";
  }
    else if(location.pathname === "/"){
      buttonText = "Login";
  }else if(location.pathname === "/forgot-password"){
    buttonText = "Login";
  }
  else if(location.pathname === "/about-us"){
    buttonText = "Login";
  }
  else if(location.pathname === "/our-team"){
    buttonText = "Login";
  }else{
    buttonText = "Logout";
  }

  const handleLogout = () => {
    if (buttonText === "Logout") {
      navigate("/"); 
    }
    if (buttonText === "Login") {
      navigate("/"); 
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  return (
    <header className="header">
  <div className="Navbar">
    <img id="logo-pic" alt="Skilledity" src="SVGs/newLogo.svg" className="logo" />

    <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
      <Link to="/" className="nav-item home-link">Home</Link>

      <div className="nav-item about-dropdown" onClick={toggleAboutDropdown}>
        About Us <span className="dropdown-arrow">▼</span>
        <div className={`dropdown-menu ${aboutDropdownOpen ? 'open' : ''}`}>
          <div className="dropdown-section" onClick={() => navigate('/about-us')}>
            <img src="SVGs/building-icon.svg" alt="Image 1" className="dropdown-image" />
            <div className="dropdown-text">
              <h4>About our company</h4>
              <p>Innovative learning for a brighter future</p>
            </div>
          </div>
          <div class="dropdown-line"></div>
          <div className="dropdown-section" onClick={() => navigate('/our-team')}>
            <img src="SVGs/team-svgrepo-com.svg" alt="Image 2" className="dropdown-image" />
            <div className="dropdown-text">
              <h4>Our team</h4>
              <p>Driven by passion, united by purpose</p>
            </div>
          </div>
        </div>
      </div>

    </nav>

    <div className="hamburger" onClick={toggleMenu}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>


    <div className="buttons">
      <button className="login" onClick={() => navigate("/login")}>
        {buttonText}
      </button>
    </div>
  </div>

  {menuOpen && <div className="menu-blur" onClick={toggleMenu}></div>}
</header>

  );
}

export default Header;
