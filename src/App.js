import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/JS/Navbar";
import "./App.css";
import LoginPortal from "./components/JS/LoginPortal";
import SchoolLoginPage from "./components/JS/SchoolLoginPage";
import Dashboard from "./components/JS/Dashboard";
import ForgotPasswordPage from "./components/JS/ForgortPasswordPage";
import { DataProvider } from "./context/dataContext";
import UploadCSV from "./components/JS/UploadCSV";
import Register from "./components/JS/ManualReg";
import Welcome from "./components/JS/WelcomePg";
import ManualStudentDetails from "./components/JS/ManualRegStudentDetails";
import StudentDetails from "./components/JS/StudentDetails";
import StudentOptions from "./components/JS/StudentOptions";
import AdminLogin from "./components/JS/AdminLogin";
import AdminForm from "./components/JS/AdminForm";
import InfoPage from "./components/JS/InfoPage";
import LandingPage from "./components/JS/LandingPage";
import AboutUs from "./components/JS/AboutUs";
import OurTeam from "./components/JS/OurTeam";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginPortal />} />
            <Route path="school-login" element={<SchoolLoginPage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="upload-csv" element={<UploadCSV />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="manual-register-student" element={<Register />} />
            <Route path="manual-register-students" element={<ManualStudentDetails />} />
            <Route path="student-details" element={<StudentDetails />} />
            <Route path="student-options" element={<StudentOptions />} />
            <Route path="admin-login" element={<AdminLogin />} />
            <Route path="admin-form" element={<AdminForm />} />
            <Route path="info-page" element={<InfoPage />} />
            <Route path="landing-page" element={<LandingPage/>}/>
            <Route path="about-us" element={<AboutUs/>}/>
            <Route path="our-team" element={<OurTeam/>}/>
           
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
