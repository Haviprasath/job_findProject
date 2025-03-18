import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-white rounded-xl shadow-md p-4">
      <h2 className="text-xl font-bold text-blue-600">JOBie</h2>
      <div className="mt-4 space-y-3">
        <button className="w-full bg-yellow-300 p-2 rounded-md font-medium">Total Applicants</button>
        <button className="w-full bg-red-300 p-2 rounded-md font-medium">Interview Schedule</button>
        <button className="w-full bg-gray-200 p-2 rounded-md font-medium">Profile Visited</button>
      </div>
      <button className="w-full bg-gray-400 p-2 rounded-md mt-6">Logout</button>
    </div>
  );
};

export default Sidebar;
