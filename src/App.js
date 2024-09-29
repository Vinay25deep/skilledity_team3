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
import botAvatar from './components/Images/doubtMasterAvatar.png'; // Adjust the path as necessary

// Importing Botpress Webchat components
import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";

function App() {
  // Botpress Webchat configuration
  const { theme, style } = buildTheme({
    themeName: "dark", // Set to dark theme to match your example
    themeColor: "#202124", // Customize the theme color to dark shades
  });

  // Add your actual Botpress client ID here
  const clientId = "79ba890d-6153-4c0d-bd58-1f4123ac3a61"; 

  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  // Toggles the Webchat visibility
  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
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
            <Route path="login" element={<LoginPortal />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="our-team" element={<OurTeam />} />
          </Routes>
        </BrowserRouter>

        {/* Botpress Webchat Integration */}
        <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
          <style>{style}</style>
          <WebchatProvider theme={theme} client={client}>
            {/* Floating Action Button */}
            <Fab onClick={toggleWebchat} />
            <div
              style={{
                display: isWebchatOpen ? "block" : "none",
                width: "400px",
                height: "600px",
                bpHeaderContentAvatarFallback: "botAvatar",
              }}
            >
              {/* Webchat with Custom Bot Name */}
              <Webchat
                config={{
                  botName: "DoubtMaster", // Custom bot name
                  botAvatarUrl: botAvatar, // Set a custom avatar URL here if needed
                }}
                onClose={toggleWebchat} // Close webchat on clicking "X" button
              />
            </div>
          </WebchatProvider>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
//hy