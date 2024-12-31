import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../styles/Admin.css"; // Importing the updated CSS file

const AdminPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false); // Error state for invalid inputs

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Predefined admin credentials
  const ADMIN_EMAIL = "admin@example.com";
  const ADMIN_PASSWORD = "admin123";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim inputs and ensure case-insensitivity for comparison
    if (
      email.trim().toLowerCase() !== ADMIN_EMAIL.toLowerCase() || 
      password.trim() !== ADMIN_PASSWORD
    ) {
      setError(true); // Trigger error state if credentials are incorrect
      setTimeout(() => setError(false), 500); // Reset error after animation
      alert("Failed to log in.");
      return;
    }

    // Navigate to Admin Dashboard on successful login
    alert("Login successful!");
    navigate("/admin-dashboard");

    // Reset form fields after login
    setEmail("");
    setPassword("");
  };

  // Redirect to the user login page on "User Login" button click
  const handleUserRedirect = () => {
    navigate("/"); // Navigates back to the user login page
  };

  return (
    <div className="admin-page">
      <form
        onSubmit={handleSubmit}
        className={`login-form ${error ? "shake-animation" : ""}`} // Apply shake animation on error
      >
        <h2>Admin Login</h2>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error && !email ? "error-border" : ""}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error && !password ? "error-border" : ""}
          />
        </label>

        <button type="submit">Login</button>
      </form>

      {/* Add User button */}
      <button className="user-button" onClick={handleUserRedirect}>
        User Login
      </button>
    </div>
  );
};

export default AdminPage;
