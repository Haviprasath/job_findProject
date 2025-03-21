import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css"; // Custom styles

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar with Profile & Add Job Button */}
      <div className="header d-flex align-items-center justify-content-between px-3 py-2 bg-white shadow-sm">
        <h2 className="mb-0">JOBie</h2>
        <div className="d-flex align-items-center gap-3">
          {/* Add Job Button */}
          <NavLink to="/add-job" className="btn btn-primary">
            Add Job
          </NavLink>

          {/* Profile Dropdown */}
          <div className="profile">
            <img src="/profile.jpg" alt="Profile" className="profile-img" />
          </div>
        </div>
      </div>

      {/* Navbar with Hamburger Menu for Small Screens */}
      <div className="d-md-none position-fixed top-0 start-0 w-100 bg-white shadow-sm px-3 py-2 d-flex align-items-center z-3">
        <button className="btn border-0" onClick={() => setIsOpen(true)}>
          {/* Hamburger SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <h2 className="ms-3 mb-0">JOBie</h2>
      </div>

      {/* Sidebar */}
      <div className={`sidebar bg-white shadow ${isOpen ? "open" : ""}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <h2 className="mb-0">JOBie</h2>
          <button className="btn border-0 text-black d-md-none" onClick={() => setIsOpen(false)}>
            {/* Close SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M6 6l12 12M6 18L18 6" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="sidebar-menu">
          <div className="nav flex-column gap-2">
            {[
              { name: "Total Applicants", path: "/" },
              { name: "Interview Schedule", path: "/schedule" },
              { name: "Profile Visited", path: "/profile-visited" },
            ].map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className="btn sidebar-btn"
                activeClassName="active"
              >
                {name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <button className="btn logout-btn">Logout</button>
      </div>

      {/* Overlay for Small Screens */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Sidebar;