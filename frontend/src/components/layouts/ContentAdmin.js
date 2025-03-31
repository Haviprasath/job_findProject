import React, { useState } from "react";
import "../../styles/contentAdmin.css";
import { BiPlus, BiEdit, BiTrash } from "react-icons/bi";
import EditJob from "../../components/EditJob";
import JobDetails from "../../components/JobDetails";
import Softy from '../../assets/softy.JPG'

const ContentAdmin = ({ setShowModal }) => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      jobTitle: "Software Intern",
      companyName: "360SOFTY",
      jobType: "Full-time",
      companyLogo: Softy,
      location: "Vavuniya",
      salaryRange: "₹60,000 - ₹80,000",
      jobDescription: "Develop and maintain web applications.",
      requiredSkills: "React, Laravel",
      experienceLevel: "Entry-Level",
      applicationDeadline: "2025-06-30",
      contactInfo: "hr@360softy.com",
    },

  ]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleEdit = (job) => {
    setSelectedJob(job);
    setShowEditModal(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (confirmDelete) {
      setJobs(jobs.filter((job) => job.id !== id));
    }
  };

  return (
    <div className="content">
      <div className="content--header">
        <h1 className="header--title">Admin Dashboard</h1>
        <button className="create-post-btn" onClick={() => setShowModal(true)}>
          <BiPlus className="icon" /> Create Post
        </button>
      </div>

      <table className="job-table">
        <thead>
          <tr>
            <th>Company Logo</th>
            <th>Company Name</th>
            <th>Job Title</th>
            <th>Job Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>
                <img src={job.companyLogo} alt="Company Logo" className="company-logo" />
              </td>
              <td>{job.companyName}</td>
              <td>{job.jobTitle}</td>
              <td>{job.jobType}</td>
              <td>
                <button className="view-btn" onClick={() => { setSelectedJob(job); setShowDetailsModal(true); }}>
                  View Details
                </button>
                <button className="edit-btn" onClick={() => handleEdit(job)}>
                  <BiEdit /> Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(job.id)}>
                  <BiTrash /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showEditModal && <EditJob job={selectedJob} onClose={() => setShowEditModal(false)} />}
      {showDetailsModal && <JobDetails job={selectedJob} onClose={() => setShowDetailsModal(false)} />}
    </div>
  );
};

export default ContentAdmin;
