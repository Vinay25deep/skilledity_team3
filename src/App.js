import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect } from 'react'; 
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
import LandingPage from "./components/JS/LandingPage";
import InfoPage from "./components/JS/InfoPage";
import AboutUs from "./components/JS/AboutUs";
import OurTeam from "./components/JS/OurTeam";
import { useDispatch } from 'react-redux';
import { setAuth } from './redux/reducers/authSlice';
import {jwtDecode} from "jwt-decode"; // Fix import if needed
import { useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.authorisation);


  // Function to get a specific cookie by name
  const getCookie = (name) => {
    const cookies = document.cookie
      .split("; ")
      .find(row => row.startsWith(`${name}=`));
    return cookies ? cookies.split("=")[1] : null;
  };

  // Function to check token validity and set authentication state
  const checkToken = () => {
    const token = getCookie('jwt'); // Get JWT from cookies
    if (token) {
      try {
        const decoded = jwtDecode(token); // Decode token
        const currentTime = Date.now() / 1000; // Get current time in seconds

        // Check if token has expired
        if (decoded.exp < currentTime) {
          dispatch(setAuth(false)); // Session expired
          alert("Session has expired. Please log in again.");
          return false;
        } else {
          dispatch(setAuth(true)); // Example action
          return true;
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        dispatch(setAuth(false));
        return false;
      }
    } else {
      dispatch(setAuth(false)); // No token found
      return false;
    }
  };

  // Run token check on page load or refresh
    // useEffect(() => {
    //   checkToken();
    // }, []); // Empty dependency array to run only once on mount

  // PrivateRoute Component to restrict routes
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPortal />} />
          <Route path="school-login" element={<SchoolLoginPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="admin-login" element={<AdminLogin />} />
          <Route path="about-us" element={<AboutUs/>}/>
          <Route path="our-team" element={<OurTeam/>}/>
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
          <Route path="info-page" element={
            <PrivateRoute>
              <InfoPage />
            </PrivateRoute>
          }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
