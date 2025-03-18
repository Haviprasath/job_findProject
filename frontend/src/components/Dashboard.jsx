import React from "react";
import Sidebar from "./Sidebar";
import PieChartComponent from "./PieChartComponent";
import ApplicantsTable from "./ApplicantsTable";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 p-4">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between">
          {/* Pie Chart */}
          <PieChartComponent />

          {/* Applicants Table */}
          <ApplicantsTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
