import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
import "../styles/Login.css"; // Importing the updated CSS file

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate(); // Hook to access navigation

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Admin credentials validation
    if (email === "admin@example.com" && password === "admin123") {
      setIsAdmin(true); // Set the admin flag as true if credentials are correct
      navigate("/admin"); // Redirect to AdminPage
    }
    // User credentials validation
    else if (email === "user@example.com" && password === "user123") {
      navigate("/user-dashboard"); // Redirect to User Dashboard
    } else {
      alert("Invalid credentials!"); // Show error if credentials are incorrect
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      {/* Admin login button */}
      <button onClick={() => navigate("/admin")}>Admin Login</button>
    </div>
  );
};

export default LoginPage;
