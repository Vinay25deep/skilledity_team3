import React from "react";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="Navbar">
        <img id="logo-pic" alt="Skilledity" src="SVGs/newLogo.svg" className="logo"></img>
        <div className="buttons">
          <a id="login-button" href="/LoginPortal">
            <button className="login">Logout </button>
          </a>
        </div>
      </div>
      <div />
    </header>
  );
}

export default Header;
