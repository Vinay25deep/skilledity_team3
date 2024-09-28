import React from 'react';
import Header from './Navbar1';
import '../CSS/OurTeam.css';

function OurTeam() {
  return (
    <>
      <Header />
      <div className="our-team-container">
        <h2 className="team-heading">Meet our <span className="highlight4">Team</span></h2>
        <p className="team-subheading">
          Get to know the talented individuals driving our success and shaping our vision.
        </p>

        <div className="team-members">
        <div className="team-card">
  <div className="team-card-inner">
    <div className="team-card-front">
      <div className="team-photo"></div>
      <h3 className="team-name">Name</h3>
      <p className="team-designation">Designation</p>
    </div>
    
    <div className="team-card-back">
      <h3>Name</h3>
      <p>Designation</p>
      <div className="separator"></div> 
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nunc quis vehicula quam. Proin convallis purus nec justo venenatis.
      </p>
    </div>
  </div>
</div>
<div className="team-card">
  <div className="team-card-inner">

    <div className="team-card-front">
      <div className="team-photo"></div>
      <h3 className="team-name">Name</h3>
      <p className="team-designation">Designation</p>
    </div>

    <div className="team-card-back">
  <h3>Name</h3>
  <p>Designation</p>
  <div className="separator"></div> 
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vehicula quam. 
    Proin convallis purus nec justo venenatis, at feugiat justo fermentum.
  </p>
</div>

  </div>
</div>
<div className="team-card">
  <div className="team-card-inner">
    <div className="team-card-front">
      <div className="team-photo"></div>
      <h3 className="team-name">Name</h3>
      <p className="team-designation">Designation</p>
    </div>
    
    <div className="team-card-back">
      <h3>Name</h3>
      <p>Designation</p>
      <div className="separator"></div> 
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nunc quis vehicula quam. Proin convallis purus nec justo venenatis.
      </p>
    </div>
  </div>
</div>

          <div className="team-card">
  <div className="team-card-inner">

    <div className="team-card-front">
      <div className="team-photo"></div>
      <h3 className="team-name">Name</h3>
      <p className="team-designation">Designation</p>
    </div>
   
    <div className="team-card-back">
      <h3>Name</h3>
      <p>Designation</p>
      <div className="separator"></div> 
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nunc quis vehicula quam. Proin convallis purus nec justo venenatis.
      </p>
    </div>
  </div>
</div>
<div className="team-card">
  <div className="team-card-inner">
    <div className="team-card-front">
      <div className="team-photo"></div>
      <h3 className="team-name">Name</h3>
      <p className="team-designation">Designation</p>
    </div>

    <div className="team-card-back">
      <h3>Name</h3>
      <p>Designation</p>
      <div className="separator"></div> 
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nunc quis vehicula quam. Proin convallis purus nec justo venenatis.
      </p>
    </div>
  </div>
</div>
</div>
        <div className="team-stats-container">
          <div className="team-stats">
            <div className="stat-item">
              <h4>10+</h4>
              <p>Educators</p>
            </div>
            <div className="divider"></div>
            <div className="stat-item">
              <h4>25+</h4>
              <p>Support Technicians</p>
            </div>
            <div className="divider"></div>
            <div className="stat-item">
              <h4>15+</h4>
              <p>Research Personnel</p>
            </div>
          </div>

          <p className="team-description">
            At the heart of education and technology, our team is driven by a passion for transforming the way people learn. From intuitive design to innovative solutions, we're making learning engaging and accessible. We are Skilledity!
          </p>
        </div>
      </div>
      <footer className='landing-page-footer'>
                <div className='footer-content'>
                    <div className='lp-logo-mail-container'>
                      <img id="lp-logo-pic" alt="Skilledity" src="SVGs/newLogo.svg" className="lp-logo" />
                      <div className='lp-mail-container'>
                        <img id="lp-mail-pic" alt="mail" src="SVGs/mail_icon.svg" className="lp-mail-icon" />
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
                            <p>1000hrs to 1800hrs<br/>Monday to Tuesday</p>
                          </div>
                        </div>
                        <div className="footer-line"></div>
                        
                        <div className="social-media-icons">
                            <img src="/SVGs/facebook.svg" alt="Facebook"className="fb-icon"
                              onMouseOver={(e) => e.currentTarget.src = "/SVGs/facebook2.svg"}
                              onMouseOut={(e) => e.currentTarget.src = "/SVGs/facebook.svg"}
                              />
                            <img src="/SVGs/insta.svg" alt="Instagram" className="insta-icon"
                              onMouseOver={(e) => e.currentTarget.src = "/SVGs/insta2.svg"}
                              onMouseOut={(e) => e.currentTarget.src = "/SVGs/insta.svg"} 
                              />
                              <img src="/SVGs/x.svg" alt="Twitter"className="x-icon"
                              onMouseOver={(e) => e.currentTarget.src = "/SVGs/x2.svg"}
                              onMouseOut={(e) => e.currentTarget.src = "/SVGs/x.svg"}
                              />
                            <img src="/SVGs/linkedin.svg" alt="LinkedIn" className="linkedin-icon"
                              onMouseOver={(e) => e.currentTarget.src = "/SVGs/linkedin2.svg"}
                              onMouseOut={(e) => e.currentTarget.src = "/SVGs/linkedin.svg"}
                            />
                            <img src="/SVGs/youtube.svg" alt="YouTube" className="yt-icon"
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
    </>
  );
}

export default OurTeam;

