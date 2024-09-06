import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import "./App.css";
import LoginPortal from "./components/LoginPortal";
import SchoolLoginPage from "./components/SchoolLoginPage";
import { DataProvider } from './context/dataContext';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<LoginPortal />} />
            <Route path="school-login" element={<SchoolLoginPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
