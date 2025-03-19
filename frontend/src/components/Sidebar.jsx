import React, { useState } from "react";
import './sidebar.css';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Total Applicants");

  return (
    <div className="sidebar">
      <h2>JOBie</h2>
      <div className="nav-tabs">
        <button
          className={activeTab === "Total Applicants" ? "active" : ""}
          onClick={() => setActiveTab("Total Applicants")}
        >
          Total Applicants
        </button>

        <button
          className={activeTab === "Interview Schedule" ? "active" : ""}
          onClick={() => setActiveTab("Interview Schedule")}
        >
          Interview Schedule
        </button>

        <button
          className={activeTab === "Profile Visited" ? "active" : ""}
          onClick={() => setActiveTab("Profile Visited")}
        >
          Profile Visited
        </button>
      </div>

      {/* Logout Button */}
      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default Sidebar;
