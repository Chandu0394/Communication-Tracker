import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>Communication Tracker</h1>
      <nav>
        <Link to="/admin">Admin</Link> | <Link to="/user">User</Link>
      </nav>
    </header>
  );
};

export default Header;
