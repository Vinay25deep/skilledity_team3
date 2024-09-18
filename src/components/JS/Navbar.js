import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../CSS/Header.css";

function Header() {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility

  let buttonText = "Logout";
  if (location.pathname === "/" ) {
    buttonText = "Login";
  } else if(location.pathname === "/school-login"){
    buttonText = "Login";
  }else if(location.pathname === "/forgot-password"){
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
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <header className="header">
      <div className="Navbar">
        <img id="logo-pic" alt="Skilledity" src="SVGs/newLogo.svg" className="logo" />

        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className={`buttons ${menuOpen ? "active" : ""}`}>
          <button className="login" onClick={handleLogout}>
            {buttonText}
          </button>
        </div>
      </div>

      {/* Blurred background when the menu is open */}
      {menuOpen && <div className="menu-blur" onClick={toggleMenu}></div>}
    </header>
  );
}

export default Header;
