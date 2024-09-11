import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import "./App.css";
import LoginPortal from "./components/LoginPortal";
import SchoolLoginPage from "./components/SchoolLoginPage";
import Dashboard from "./components/Dashboard";
import ForgotPasswordPage from "./components/ForgortPasswordPage";
import { DataProvider } from './context/dataContext';
import UploadCSV from './components/UploadCSV';
import ManualReg from './components/ManualReg';


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<LoginPortal />} />
            <Route path="school-login" element={<SchoolLoginPage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="upload-csv" element={<UploadCSV />} />
            <Route path="manual-register-student" element={<ManualReg />} />

          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
