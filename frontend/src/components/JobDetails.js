import React from "react";
import "../styles/jobDetails.css";

const JobDetails = ({ job, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{job.jobTitle} at {job.companyName}</h2>
        <img src={job.companyLogo} alt="Company Logo" className="company-logo-large" />
        <p><strong>Job Type:</strong> {job.jobType}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Salary:</strong> {job.salaryRange}</p>
        <p><strong>Description:</strong> {job.jobDescription}</p>
        <p><strong>Skills Required:</strong> {job.requiredSkills}</p>
        <p><strong>Experience Level:</strong> {job.experienceLevel}</p>
        <p><strong>Application Deadline:</strong> {job.applicationDeadline}</p>
        <p><strong>Contact:</strong> {job.contactInfo}</p>

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default JobDetails;
