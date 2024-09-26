import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{useState} from 'react';
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
import { useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import { setForiegnKey } from './redux/reducers/authSlice';  // Import the Redux action
import { useDispatch } from 'react-redux';  // Import useDispatch to dispatch Redux actions


function App() {
  const token = localStorage.getItem("authToken");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [fkno,setFkno] = useState('');
  useEffect(() => {
    // Retrieve the token from localStorage or cookies
    const token = localStorage.getItem("authToken"); // or Cookies.get('authToken')

    if (token) {
      try {
        // Decode the token using jwt-decode
        const decodedToken = jwtDecode(token);
        
        // Access the school_fk_no from the token payload
        const schoolstudentFKNo = decodedToken.school_student_fk;
        setFkno(schoolstudentFKNo);
        console.log("School FK Number:",schoolstudentFKNo);
      } catch (error) {
        console.error("Invalid token", error);
      }
    } else {
      console.log("No token found.");
    }
  }, []);

  const PrivateRoute = ({ children, isAuthenticated }) => {
    return isAuthenticated ? children : <Navigate to="/" />;
  };
  
  if (token) {
    console.log("Token exists:", token);
    dispatch(setForiegnKey({ school_student_fk: fkno }));
    setIsAuthenticated(true);
  } else {
    console.log("No token found.");
  }
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
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          }/>
          <Route path="upload-csv" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <UploadCSV />
            </PrivateRoute>
          }/>
          <Route path="welcome" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Welcome />
            </PrivateRoute>
          }/>
          <Route path="manual-register-student" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Register />
            </PrivateRoute>
          }/>
          <Route path="manual-register-students" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ManualStudentDetails />
            </PrivateRoute>
          }/>
          <Route path="student-details" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <StudentDetails />
            </PrivateRoute>
          }/>
          <Route path="student-options" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <StudentOptions />
            </PrivateRoute>
          }/>
          <Route path="admin-form" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <AdminForm />
            </PrivateRoute>
          }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
