import React, { useState } from "react";
import "./sidebar.css"; // Custom styles

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Total Applicants");

  return (
    <>
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
      <div className={` sidebar bg-white shadow text-white ${isOpen ? "open" : ""}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <h2 className="mb-0">JOBie</h2>
          <button className="btn border-0 text-white d-md-none" onClick={() => setIsOpen(false)}>
            {/* Close SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M6 6l12 12M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="sidebar-menu">
          <div className="nav flex-column gap-2">
            {["Jobs","Total Applicants", "Interview Schedule", "Profile Visited"].map((tab) => (
              <button
                key={tab}
                className={`btn sidebar-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
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