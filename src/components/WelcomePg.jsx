
import React, { useState } from 'react';
import './WelcomePg.css';

function Welcome() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState('Select Class'); 

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedClass(option); 
    setDropdownOpen(false); 
  };

  const [section, setSection] = useState('');
  const [error, setError] = useState('');

  const handleSectionChange = (e) => {
    const input = e.target.value.toUpperCase();
    const regex = /^[A-Z]$/;

    if (input === '' || regex.test(input)) {
      setSection(input);
      setError('');
    } else {
      setError('Please enter a single letter from A-Z.');
    }
  };

  return (
    <div id="reg-student">
      <div className="large"> Welcome <span style={{ color: 'rgba(85, 103, 156, 1)' }}>aboard!</span></div>
      <div className="small"> Select the class & section to proceed</div>
      <div className="form-container-reg">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="class-dropdown" className="form-label">Class</label>
            <div className={`custom-dropdown ${isDropdownOpen ? 'active' : ''}`}>
              <button className="dropdown-button" onClick={toggleDropdown}>
                {selectedClass} 
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content">
  <div className="dropdown-item" onClick={() => handleOptionClick('Class 6')}>
  &nbsp;Class 6
  </div>
  <div className="dropdown-item" onClick={() => handleOptionClick('Class 7')}>
  &nbsp;Class 7
  </div>
  <div className="dropdown-item" onClick={() => handleOptionClick('Class 8')}>
  &nbsp;Class 8
  </div>
  <div className="dropdown-item" onClick={() => handleOptionClick('Class 9')}>
  &nbsp;Class 9
  </div>
  <div className="dropdown-item" onClick={() => handleOptionClick('Class 10')}>
  &nbsp;Class 10
  </div>
</div>

              )}
            </div>
          </div>
          <div className="form-group">
      <label htmlFor="section-input" className="form-label">Section</label>
      <input
        type="text"
        id="section-input"
        className="form-input"
        placeholder="Enter the section"
        value={section}
        maxLength={1}
        onChange={handleSectionChange}
      />
      {error && <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>}
    </div>
        </div>
      </div>
      <div className="central-button-container">
        <button className="b1"> <span class="text">Proceed</span></button>
      </div>
    </div>
  );
}

export default Welcome;
