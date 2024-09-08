import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPortal from "./components/LoginPortal";
import SchoolLoginPage from "./components/SchoolLoginPage";
import Header from "./components/Navbar";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPortal />} />
        <Route path="/LoginPortal" element={<LoginPortal />} />
        <Route path="/SchoolLoginPage" element={<SchoolLoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
