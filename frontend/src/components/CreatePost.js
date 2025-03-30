import React, { useState } from "react";
import "../styles/createPost.css"; // Import the CSS file

const CreatePost = ({ setShowModal }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    jobType: "full-time",
    location: "",
    salaryRange: "",
    jobDescription: "",
    requiredSkills: "",
    experienceLevel: "",
    applicationDeadline: "",
    companyLogo: null,
    contactInfo: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.jobTitle && formData.companyName && formData.jobDescription) {
      console.log("Job Posting Data:", formData);
      setShowModal(false); // Close the modal after submission
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Post a Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="jobType">Job Type</label>
              <select
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
              >
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="remote">Remote</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="salaryRange">Salary Range (Optional)</label>
              <input
                type="text"
                id="salaryRange"
                name="salaryRange"
                placeholder="Salary Range"
                value={formData.salaryRange}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="jobDescription">Job Description</label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                placeholder="Job Description"
                value={formData.jobDescription}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="requiredSkills">Required Skills</label>
              <input
                type="text"
                id="requiredSkills"
                name="requiredSkills"
                placeholder="Required Skills"
                value={formData.requiredSkills}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="experienceLevel">Experience Level</label>
              <input
                type="text"
                id="experienceLevel"
                name="experienceLevel"
                placeholder="Experience Level"
                value={formData.experienceLevel}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="applicationDeadline">Application Deadline</label>
              <input
                type="date"
                id="applicationDeadline"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="companyLogo">Company Logo</label>
              <input
                type="file"
                id="companyLogo"
                name="companyLogo"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactInfo">Contact Email/Phone</label>
              <input
                type="text"
                id="contactInfo"
                name="contactInfo"
                placeholder="Contact Email/Phone"
                value={formData.contactInfo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="modal-buttons">
            <button type="submit" className="submit-btn">Submit</button>
            <button
              type="button"
              className="close-btn-create"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
