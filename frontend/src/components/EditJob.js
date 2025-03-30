import React, { useState } from "react";
import "../styles/editJob.css";

const EditJob = ({ job, onClose }) => {
  const [formData, setFormData] = useState(job);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Job Data:", formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Job</h2>
        <form onSubmit={handleSubmit}>
          <label>Job Title</label>
          <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />

          <label>Company Name</label>
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />

          <label>Job Type</label>
          <select name="jobType" value={formData.jobType} onChange={handleChange}>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="remote">Remote</option>
          </select>

          <div className="modal-buttons">
            <button type="submit" className="submit-btn">Save Changes</button>
            <button type="button" className="close-btn-edit" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJob;
