import { useState } from "react";
import "./SidebarForm.css";
import { Form, Input, DatePicker } from "antd";
import Close from "./close.svg";
import Img from './Other.png';
import { useNavigate } from 'react-router-dom';

const { Item } = Form;

const SidebarForm = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');

  const handleGenderSelection = (genderValue) => {
    setGender(genderValue);
    form.setFieldsValue({ gender: genderValue });
    setError(''); // Clear error when a gender is selected
  };

  const onFinish = (values) => {
    if (!gender) {
      setError('Please select a gender.');
    } else {
      console.log("Form Values:", values);
      onClose();
      navigate('/manual-register-students');
    }
  };

  const onFinishFailed = () => {
    // Handle the case when form validation fails, for example, focus on the first invalid field
  };

  return (
    <div className={`containerSidebarForm ${visible ? 'visible' : 'hidden'}`}>
      <div className="containerSidebar">
        <div className="closeIconContainer" onClick={onClose}>
          <img src={Close} className="closeIconSidebar" alt="Close Icon" draggable="false" />
        </div>
        <div className="scrollableForm">
          <h1 className="registerStudentSidebarForm">Register <span className="studentSidebarColor">Student!</span></h1>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Item
              label="Name"
              className="itemLabel"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Enter your name" />
            </Item>

            <Item
              label="Father's Name"
              className="itemLabel"
              name="fatherName"
              rules={[{ required: true, message: "Please input your father's name!" }]}
            >
              <Input placeholder="Enter father's name" />
            </Item>

            <Item
              label="School Admission No."
              className="itemLabel"
              name="admissionNo"
              rules={[{ required: true, message: "Please input the admission number!" }]}
            >
              <Input placeholder="Enter admission number" />
            </Item>

            <Item
              label="Contact No."
              className="itemLabel"
              name="contactNo"
              rules={[
                { required: true, message: "Please input your contact number!" },
                { pattern: /^[0-9]{10}$/, message: "Please enter a valid 10-digit contact number!" },
              ]}
            >
              <Input placeholder="Enter student contact number" />
            </Item>

            <Item
              label="Date of Birth"
              className="itemLabel"
              name="dob"
              rules={[{ required: true, message: "Please select your date of birth!" }]}
            >
              <DatePicker placeholder="Select date of birth" />
            </Item>

            <Item
              label="Gender"
              className="itemLabel itemGender"
              name="gender"
              rules={[{ required: true, message: "Please select your gender!" }]}
            >
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
                  <span>Male</span>
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
                  <span>Female</span>
                </button>
                <button
                  type="button"
                  className={`gender-button ${gender === 'Other' ? 'selected' : ''}`}
                  onClick={() => handleGenderSelection('Other')}
                >
                  <div className="gender-icon">
                    <img src={Img} alt="Other Gender" style={{ width: '30px', height: '30px' }} />
                  </div>
                  <span>Other</span>
                </button>
              </div>
              {error && <span className="error-message">{error}</span>}
            </Item>

            <Item
              label="Email Address"
              className="itemLabel"
              name="email"
              rules={[
                { required: true, message: "Please input your email address!" },
                { type: "email", message: "Please enter a valid email address!" },
              ]}
            >
              <Input placeholder="Enter email address" />
            </Item>

            <div className="containerBtnProceedSidebar">
              <button className="b1" htmlType="submit">
                <span className="text">Proceed</span>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SidebarForm;
