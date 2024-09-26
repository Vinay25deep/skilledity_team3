import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/WelcomePg.css';
import { useDispatch } from 'react-redux';  // Import useDispatch to dispatch Redux actions
import { setClassData } from '../../redux/reducers/authSlice';  // Import the Redux action

function Welcome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState('Select Class');
  const [section, setSection] = useState('');
  const [error, setError] = useState('');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedClass(option);
    setDropdownOpen(false);
  };

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProceed = () => {
    if (selectedClass === 'Select Class' || section === '') {
      setError('Please select both Class and Section to proceed.');
    } else {
      setError('');
      dispatch(setClassData({ std_class: selectedClass, section: section }));
      navigate('/manual-register-student');
    }
  };

  return (
    <div id="reg-student">
      <div className="large-wel">
        Welcome <span style={{ color: 'rgba(85, 103, 156, 1)' }}>aboard!</span>
      </div>
      <div className="small"> Select the class & section to proceed</div>
      <div className="form-container-reg">
        <div className="form-row">
          <div className="form-group1" ref={dropdownRef}>
            <label htmlFor="class-dropdown" className="form-label">Class</label>
            <div className={`custom-dropdown ${isDropdownOpen ? 'active' : ''}`}>
              <button className="dropdown-button" onClick={toggleDropdown}>
                {selectedClass}
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <div className="dropdown-item" onClick={() => handleOptionClick('6')}>
                    &nbsp;6
                  </div>
                  <div className="dropdown-item" onClick={() => handleOptionClick('7')}>
                    &nbsp;7
                  </div>
                  <div className="dropdown-item" onClick={() => handleOptionClick('8')}>
                    &nbsp;8
                  </div>
                  <div className="dropdown-item" onClick={() => handleOptionClick('9')}>
                    &nbsp;9
                  </div>
                  <div className="dropdown-item" onClick={() => handleOptionClick('10')}>
                    &nbsp;10
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="form-group1">
            <label htmlFor="section-input" className="form-label">Section</label>
            <input
              type="text"
              id="section-input"
              className="section-input"
              placeholder="Enter the section"
              value={section}
              maxLength={1}
              onChange={handleSectionChange}
            />
          </div>
        </div>
      </div>

      {error && <span style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>{error}</span>}

      <div className="central-button-container">
        <button className="b1" onClick={handleProceed}>
          <span className="text">Proceed</span>
        </button>
      </div>
    </div>
  );
}

export default Welcome;
