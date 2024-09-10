
import './ManualReg.css';
import Img from './Other.png';
import { useState } from 'react';

function Register() {
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');

  const handleGenderSelection = (value) => {
    setGender(value);
    setError(''); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (!gender) {
      setError('Please select a gender.');
      return;
    }
  };

  return (
    <>
      <div className="large">
        Register <span style={{ color: 'rgba(85, 103, 156, 1)' }}>student!</span>
      </div>
      <div className="small">
        Register your student by filling out the registration form.
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-column left-column">
            <div className="input-field">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter the Student's full name"
                required
              />
            </div>
            <div className="input-field">
              <label>Date of Birth &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <g fill="none">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07M7 4V2.5M17 4V2.5M21.5 9H10.75M2 9h3.875"/>
                    <path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/>
                  </g>
                </svg>
              </label>
              <div className="dob-inputs">
                <input
                  type="number"
                  placeholder="DD"
                  min="1"
                  max="31"
                  required
                />
                <input
                  type="number"
                  placeholder="MM"
                  min="1"
                  max="12"
                  required
                />
                <input
                  type="number"
                  placeholder="YYYY"
                  min="1900"
                  max={new Date().getFullYear()}
                  required
                />
              </div>
            </div>
            <div className="input-field">
              <label>Contact No.</label>
              <input
                type="tel"
                placeholder="Enter Student phone number"
                required
              />
            </div>
            <div className="input-field">
              <label>School Admission No.</label>
              <input
                type="text"
                placeholder="Enter Student Registration No."
                required
              />
            </div>
          </div>

          <div className="form-column right-column">
            <div className="input-field">
              <label>Father's Name</label>
              <input
                type="text"
                placeholder="Enter the Student's Father's Name"
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="gender">Gender</label>
              <div className="gender-options">
                <button
                  type="button"
                  className={`gender-button ${gender === 'Male' ? 'selected' : ''}`}
                  onClick={() => handleGenderSelection('Male')}
                >
                  <div className="gender-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 511.01">
                      <path fill-rule="nonzero" d="m456.72 96.62-115.49 115.5c22.46 31.03 35.72 69.17 35.72 110.41 0 52.04-21.1 99.17-55.2 133.27-34.11 34.1-81.23 55.21-133.28 55.21-52.03 0-99.17-21.11-133.27-55.21C21.1 421.7 0 374.57 0 322.53c0-52.04 21.1-99.17 55.2-133.27 34.1-34.1 81.23-55.21 133.27-55.21 42.91 0 82.47 14.35 114.16 38.5L419.89 55.28h-62.84V0H512v158.91h-55.28V96.62zM282.66 228.35c-24.1-24.1-57.41-39.02-94.19-39.02s-70.08 14.92-94.18 39.02c-24.1 24.1-39.01 57.4-39.01 94.18 0 36.78 14.91 70.09 39.01 94.19 24.1 24.1 57.4 39.01 94.18 39.01 36.78 0 70.09-14.91 94.19-39.01 24.1-24.1 39.01-57.41 39.01-94.19s-14.91-70.08-39.01-94.18z"/>
                    </svg>
                  </div>
                  Male
                </button>
                <button
                  type="button"
                  className={`gender-button ${gender === 'Female' ? 'selected' : ''}`}
                  onClick={() => handleGenderSelection('Female')}
                >
                  <div className="gender-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 361 511.42">
                      <path fill-rule="nonzero" d="M203.64 359.53v44.17h78.58v52.94h-78.58v54.78H150.7v-54.78H72.13V403.7h78.57v-45.15c-37.91-6.3-71.82-24.41-97.83-50.42C20.21 275.47 0 230.35 0 180.5c0-49.84 20.21-94.97 52.87-127.63S130.65 0 180.5 0c49.84 0 94.97 20.21 127.63 52.87S361 130.66 361 180.5c0 49.84-20.21 94.97-52.87 127.63-27.52 27.52-63.9 46.2-104.49 51.4zM270.7 90.3c-23.08-23.08-54.98-37.36-90.2-37.36-35.23 0-67.12 14.28-90.2 37.36s-37.36 54.98-37.36 90.2c0 35.23 14.28 67.12 37.36 90.2s54.97 37.36 90.2 37.36c35.22 0 67.12-14.28 90.2-37.36s37.36-54.97 37.36-90.2c0-35.22-14.28-67.12-37.36-90.2z"/>
                    </svg>
                  </div>
                  Female
                </button>
                <button
                  type="button"
                  className={`gender-button ${gender === 'Other' ? 'selected' : ''}`}
                  onClick={() => handleGenderSelection('Other')}
                >
                  <div className="gender-icon">
                    <img src={Img} alt="Description" style={{ width: '30px', height: '30px' }} />
                  </div>
                  Other
                </button>
              </div>
              <input type="hidden" name="gender" id="gender-input" value={gender} required />
              {error && <div className="error-message">{error}</div>} 
            </div>
            <div className="input-field">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Student Email Address"
                required
              />
            </div>
          </div>
        </div>

        <button type="submit" className="proceed-button">Proceed</button>
      </form>
    </>
  );
}

export default Register;

