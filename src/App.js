import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import Dashboard from "./components/User/Dashboard"; // Ensure this matches the exported name from Dashboard.js
import AdminDashboard from "./components/Admin/AdminDashboard";
import CommunicationMethod from "./components/Admin/CommunicationMethod";
import CompanyForm from "./components/Admin/CompanyForm";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginPage />} /> {/* Default Route for Login Page */}

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminPage />} /> {/* Admin Login Route */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Admin Dashboard Route */}
        <Route path="/communication-method-form" element={<CommunicationMethod />} /> {/* Communication Method Form Route */}
        <Route path="/company-form" element={<CompanyForm />} /> {/* Company Form Route */}

        {/* User Routes */}
        <Route path="/user-dashboard" element={<Dashboard />} /> {/* User Dashboard Route */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
