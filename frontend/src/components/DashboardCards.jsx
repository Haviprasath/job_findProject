import React from 'react';

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
     
      <div className="bg-white p-6 rounded-lg shadow-lg col-span-2 lg:col-span-1">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Working Type</h2>
          <div className="text-gray-500">859</div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="text-5xl font-bold">859</div>
          <div className="w-24 h-24">
            <img
              alt="Pie chart showing working type distribution"
              height="100"
              src="https://storage.googleapis.com/a1aa/image/VdpoVzSbkjRDg8A05tEBmIaJ4gveTXjsvj66AWWUSpU.jpg"
              width="100"
            />
          </div>
        </div>
        <div className="text-green-500 mb-2">↑ 2.1% vs last 7 days</div>
        <div className="text-gray-500">WFO applicants</div>
        <div className="text-gray-500">WFH applicants</div>
      </div>

      {/* Total Applications Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Total Applications</h2>
          <div className="text-gray-500">592</div>
        </div>
        <div className="text-5xl font-bold mb-4">592</div>
        <div className="text-green-500">↑ 25%</div>
      </div>

      {/* Interview Schedule Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Interview Schedule</h2>
          <div className="text-gray-500">142</div>
        </div>
        <div className="text-5xl font-bold mb-4">142</div>
        <div className="text-green-500">↑ 10%</div>
      </div>

      {/* Profile Visited Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Profile Visited</h2>
          <div className="text-gray-500">483</div>
        </div>
        <div className="text-5xl font-bold mb-4">483</div>
        <div className="text-green-500">↑ 30%</div>
      </div>
    </div>
  );
};

export default DashboardCards;
