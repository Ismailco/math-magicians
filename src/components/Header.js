import './Header.css';
import React from 'react';

function Headers() {
  return (
    <div className="header">
      <h1 className="logo">Math Magicians</h1>
      <nav className="nav">
        <ul className="nav-linkes">
          <li className="nav-link">Home</li>
          <li className="nav-link">Calculator</li>
          <li className="nav-link">Quotes</li>
        </ul>
      </nav>
    </div>
  );
}

export default Headers;
