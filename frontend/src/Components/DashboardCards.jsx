// DashboardCards.js
import React from 'react';

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Example Dashboard Card */}
      <div className="dashboard-card">
        <h2>Working Type</h2>
        <div className="number">859</div>
        <div className="percentage">↑ 2.1% vs last 7 days</div>
      </div>
      {/* Add more cards here as needed */}
    </div>
  );
};

export default DashboardCards;
