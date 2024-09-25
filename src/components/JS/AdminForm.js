import '../CSS/AdminForm.css';
import { useState } from 'react';

function AdminForm() {
  const [schoolId, setSchoolId] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [schoolAddress, setSchoolAddress] = useState('');
  const [schoolEmail, setSchoolEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!schoolId || !schoolName || !schoolAddress || !schoolEmail) {
      alert('Please fill in all fields.');
      return;
    }

    // You can handle the form submission here, for example:
    // submitForm({ schoolId, schoolName, schoolAddress, schoolEmail });

    // Navigate to another page if needed
    // navigate('/some-route');
  };

  return (
    <div id="manual-reg">
      <div className="large">
        Register <span style={{ color: 'rgba(85, 103, 156, 1)' }}>school!</span>
      </div>
      <div className="small">
        Register your school by filling out the registration form.
      </div>
      <form id="reg-form" onSubmit={handleSubmit}>
        <div className="reg-form-container">
          <div className="form-column">
            <div className="input-field">
              <label>School ID</label>
              <input
                type="text"
                placeholder="Enter the School's ID"
                value={schoolId}
                onChange={(e) => setSchoolId(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <label>School Name</label>
              <input
                type="text"
                placeholder="Enter the School's Name"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <label>School Address</label>
              <input
                type="text"
                placeholder="Enter the School's Address"
                value={schoolAddress}
                onChange={(e) => setSchoolAddress(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <label>School Email</label>
              <input
                type="email"
                placeholder="Enter the School's Email Address"
                value={schoolEmail}
                onChange={(e) => setSchoolEmail(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        
        <button id="b1-btn" className="b1" type="submit">
          <span className="text">Proceed</span>
        </button>
      </form>
    </div>
  );
}

export default AdminForm;

