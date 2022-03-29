import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Headers() {
  return (
    <div className="header">
      <h1 className="logo">🪄 Math Magicians 🪄</h1>
      <nav className="nav">
        <Link className="nav-link" to="/">
          🏠 Home
        </Link>
        <Link className="nav-link" to="/calc">
          🖩 Calculator
        </Link>
        <Link className="nav-link" to="/quotes">
          📜 Quotes
        </Link>
      </nav>
    </div>
  );
}

export default Headers;
