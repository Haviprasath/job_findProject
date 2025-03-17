// App.js
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import DashboardCards from "./components/DashboardCards"; // Import the DashboardCards component
import './App.css';

const App = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4 bg-white">
         
          <DashboardCards />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
