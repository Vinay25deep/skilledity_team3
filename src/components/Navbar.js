import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation(); 
  const navigate = useNavigate(); 

  let buttonText = "Logout";
  if (location.pathname === "/") {
    buttonText = "Login";
  } else {
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

  return (
    <header className="header">
      <div className="Navbar">
        <img id="logo-pic" alt="Skilledity" src="SVGs/newLogo.svg" className="logo" />
        <div className="buttons">
          <button className="login" onClick={handleLogout}>
            {buttonText}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
