// Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/4 p-4 bg-black text-white">
      <div className="bg-gray-800 shadow-md rounded p-4">
        <div className="flex items-center space-x-2">
          <input checked type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
          <span className="text-lg">DashBoard</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
