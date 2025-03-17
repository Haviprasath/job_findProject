// Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-black text-white shadow-md">
      <div className="text-4xl font-bold" style={{ color: '#000AFF' }}>
        JObie
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-[#000AFF] text-white px-4 py-2 rounded">
          Post a Job
        </button>
        <i className="fas fa-bell text-xl"></i>
        <div className="flex items-center space-x-2">
          <img
            alt="Admin profile"
            className="rounded-full w-10 h-10"
            height="40"
            src="https://storage.googleapis.com/a1aa/image/n05FFNPjP-RfEN2l6v5rc-J0uHnY_sj26AidS_J8-GE.jpg"
            width="40"
          />
          <span className="text-lg">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
