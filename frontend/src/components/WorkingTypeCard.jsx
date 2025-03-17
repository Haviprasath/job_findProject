import React from 'react';


    function WorkingTypeCard (){
  return (
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
  );
}

export default WorkingTypeCard;
