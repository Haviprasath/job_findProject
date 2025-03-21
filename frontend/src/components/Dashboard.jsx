import React from "react";

import ApplicantsTable from "./ApplicantsTable";
import WorkingTypeCard from "./WorkingTypeCard"; // Import WorkingTypeCard

const Dashboard = () => {
  return (
    <div className="">
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between mb-4">
          {/* Working Type Card */}
          <WorkingTypeCard />

          {/* Pie Chart */}
     

          {/* Applicants Table */}
          <ApplicantsTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
