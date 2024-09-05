import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="Navbar">
        <div className="logo">Skilledity</div>
        <div className="buttons">
          <a href="/LoginPortal">
            <button className="login">Login</button>
          </a>
        </div>
      </div>
      <div />
    </header>
  );
}

export default Header;
