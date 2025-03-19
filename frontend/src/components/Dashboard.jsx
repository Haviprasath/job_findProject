import React from "react";

import PieChartComponent from "./PieChartComponent";
import ApplicantsTable from "./ApplicantsTable";

const Dashboard = () => {
  return (
    <div className="">
      {/* Sidebar */}
    

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
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
