import React from "react";
import PieChartComponent from "./PieChartComponent";

const WorkingTypeCard = () => {
  return (
    <div className="row">
      {/* Working Type Card */}
      <div className="col-md-3">
        <div className="card shadow-sm p-4">
           
          <h2 className="h5">Working Type<PieChartComponent /> </h2>   
          <p className="display-20 fw-bold">WOF:892</p>
          <p className="display-20 fw-bold">WOH:267</p>
          <p className="text-success">↑ 2.1% vs last 7 days</p>
        </div>
      </div>

      {/* Total Applications Card */}
      <div className="col-md-3">
        <div className="card p-4 shadow-sm">
          <h2 className="h5">Total Applications</h2>
          <p className="display-6 fw-bold">1159</p>
          <p className="text-success fw-semibold">↑ 25%</p>
        </div>
      </div>

      {/* Interview Schedule Card */}
      <div className="col-md-3">
        <div className="card p-4 shadow-sm">
          <h2 className="h5">Interview Schedule</h2>
          <p className="display-6 fw-bold">142</p>
          <p className="text-success fw-semibold">↑ 10%</p>
        </div>
      </div>

      {/* Profile Visited Card */}
      <div className="col-md-3">
        <div className="card p-4 shadow-sm">
          <h2 className="h5">Profile Visited</h2>
          <p className="display-6 fw-bold">483</p>
          <p className="text-success fw-semibold">↑ 30%</p>
        </div>
      </div>
    </div>
  );
};

export default WorkingTypeCard;
