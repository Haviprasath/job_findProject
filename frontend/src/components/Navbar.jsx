// Navbar.js
import React from "react";


    export default function Navbar(){
  return (
    <div className="row ">
   
      <div className="col">
      <h1 className="text-primary" style={{ color: '#000AFF' }}>JObie</h1> </div>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded" style={{ color: '#000AFF' }}>Post a Job</button>
        <i className="fas fa-bell text-xl"></i>
        <div className="col">
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
}


