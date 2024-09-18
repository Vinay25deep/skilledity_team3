import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import LoginPortal from "./components/LoginPortal";
import SchoolLoginPage from "./components/SchoolLoginPage";
import Dashboard from "./components/Dashboard";
import ForgotPasswordPage from "./components/ForgortPasswordPage";
import { DataProvider } from "./context/dataContext";
import UploadCSV from "./components/UploadCSV";
import Register from "./components/ManualReg";
import Welcome from "./components/WelcomePg";
import ManualStudentDetails from "./components/ManualRegStudentDetails";
import StudentDetails from "./components/StudentDetails";
import StudentOptions from "./components/StudentOptions";
import AdminLogin from "./components/AdminLogin";
import AdminForm from "./components/AdminForm";
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
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
