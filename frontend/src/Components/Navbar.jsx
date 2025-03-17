// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">JObie</div>
      <div className="navbar-actions">
        <button className="btn">Post a Job</button>
        <i className="fas fa-bell text-xl"></i>
        <div className="profile">
          <img
            alt="Admin profile"
            className="profile-img"
            height="40"
            src="https://placehold.co/40x40"
            width="40"
          />
          <span>Admin Name</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
