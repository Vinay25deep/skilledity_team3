import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react'; 
import Navbar from "./components/JS/Navbar";
import "./App.css";
import LoginPortal from "./components/JS/LoginPortal";
import SchoolLoginPage from "./components/JS/SchoolLoginPage";
import Dashboard from "./components/JS/Dashboard";
import ForgotPasswordPage from "./components/JS/ForgortPasswordPage";
import UploadCSV from "./components/JS/UploadCSV";
import Register from "./components/JS/ManualReg";
import Welcome from "./components/JS/WelcomePg";
import ManualStudentDetails from "./components/JS/ManualRegStudentDetails";
import StudentDetails from "./components/JS/StudentDetails";
import StudentOptions from "./components/JS/StudentOptions";
import AdminLogin from "./components/JS/AdminLogin";
import AdminForm from "./components/JS/AdminForm";
import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { setForiegnKey } from './redux/reducers/authSlice';  
import { useDispatch } from 'react-redux';  

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [fkno, setFkno] = useState('');

  useEffect(() => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("authToken"); 
    console.log("JWT Token:", token);


    if (token) {
      try {
        // Decode the token using jwt-decode
        const decodedToken = jwtDecode(token);
        
        // Access the schoolId from the token payload
        const schoolId = decodedToken.schoolId; // Updated according to your payload
        setFkno(schoolId);
        console.log("Decoded schoolId:", schoolId);

        dispatch(setForiegnKey({ school_student_fk: schoolId })); // Ensure this matches your state management needs
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Invalid token", error);
      }
    } else {
      console.log("No token found.");
    }
  }, [dispatch]);

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoginPortal />} />
          <Route path="school-login" element={<SchoolLoginPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="admin-login" element={<AdminLogin />} />

          {/* Private Routes */}
          <Route path="dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }/>
          <Route path="upload-csv" element={
            <PrivateRoute>
              <UploadCSV />
            </PrivateRoute>
          }/>
          <Route path="welcome" element={
            <PrivateRoute>
              <Welcome />
            </PrivateRoute>
          }/>
          <Route path="manual-register-student" element={
            <PrivateRoute>
              <Register />
            </PrivateRoute>
          }/>
          <Route path="manual-register-students" element={
            <PrivateRoute>
              <ManualStudentDetails />
            </PrivateRoute>
          }/>
          <Route path="student-details" element={
            <PrivateRoute>
              <StudentDetails />
            </PrivateRoute>
          }/>
          <Route path="student-options" element={
            <PrivateRoute>
              <StudentOptions />
            </PrivateRoute>
          }/>
          <Route path="admin-form" element={
            <PrivateRoute>
              <AdminForm />
            </PrivateRoute>
          }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
