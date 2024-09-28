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
    </>
  );
}

export default OurTeam;

