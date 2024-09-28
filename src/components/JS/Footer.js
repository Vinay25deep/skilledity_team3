import React from 'react';
import '../CSS/Footer.css'; 

const Footer = () => {
  return (
    <footer className='landing-page-footer'>
      <div className='footer-content'>
        <div className='lp-logo-mail-container'>
          <img
            id="lp-logo-pic"
            alt="Skilledity"
            src="SVGs/newLogo.svg"
            className="lp-logo"
          />
          <div className='lp-mail-container'>
            <img
              id="lp-mail-pic"
              alt="mail"
              src="SVGs/mail_icon.svg"
              className="lp-mail-icon"
            />
            <p>connect@gmail.com</p>
          </div>
        </div>

        <div className='footer-section contact-us'>
          <h3>CONTACT US</h3>
          <div className="footer-line"></div>

          <div className="contact-info">
            <div className="contact-labels">
              <p><span>Phone number:</span></p>
              <p><span>Timings:</span></p>
            </div>

            <div className="contact-details">
              <p>98xxxxxxxx</p>
              <p>1000hrs to 1800hrs<br />Monday to Tuesday</p>
            </div>
          </div>
          <div className="footer-line"></div>

          <div className="social-media-icons">
            <img
              src="/SVGs/facebook.svg"
              alt="Facebook"
              className="fb-icon"
              onMouseOver={(e) => e.currentTarget.src = "/SVGs/facebook2.svg"}
              onMouseOut={(e) => e.currentTarget.src = "/SVGs/facebook.svg"}
            />
            <img
              src="/SVGs/insta.svg"
              alt="Instagram"
              className="insta-icon"
              onMouseOver={(e) => e.currentTarget.src = "/SVGs/insta2.svg"}
              onMouseOut={(e) => e.currentTarget.src = "/SVGs/insta.svg"}
            />
            <img
              src="/SVGs/x.svg"
              alt="Twitter"
              className="x-icon"
              onMouseOver={(e) => e.currentTarget.src = "/SVGs/x2.svg"}
              onMouseOut={(e) => e.currentTarget.src = "/SVGs/x.svg"}
            />
            <img
              src="/SVGs/linkedin.svg"
              alt="LinkedIn"
              className="linkedin-icon"
              onMouseOver={(e) => e.currentTarget.src = "/SVGs/linkedin2.svg"}
              onMouseOut={(e) => e.currentTarget.src = "/SVGs/linkedin.svg"}
            />
            <img
              src="/SVGs/youtube.svg"
              alt="YouTube"
              className="yt-icon"
              onMouseOver={(e) => e.currentTarget.src = "/SVGs/youtube2.svg"}
              onMouseOut={(e) => e.currentTarget.src = "/SVGs/youtube.svg"}
            />
          </div>

        </div>

        <div className='footer-section quick-links'>
          <h3>QUICK LINKS</h3>
          <div className="footer-line"></div>
          <p>About</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>How to use?</p>
          <div className="footer-line"></div>
        </div>

        <div className='footer-section resources'>
          <h3>RESOURCES</h3>
          <div className="footer-line"></div>
          <p>Help Centre</p>
          <p>User Guide</p>
          <p>Blog</p>
          <p>Help</p>
          <div className="footer-line"></div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
