import React from 'react';
import Header from './Navbar';
import '../CSS/AboutUs.css';
import Footer from './Footer';

function AboutUs() {
  return (
    <>
      <Header />
      <section className="about-section">
        <h2 className="about-heading">About our <span className="highlight">Company</span></h2>
        <div className="about-content">
          <img src="SVGs/LandingPage2.svg" alt="About Us Illustration" className="about-image" />
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default AboutUs;

