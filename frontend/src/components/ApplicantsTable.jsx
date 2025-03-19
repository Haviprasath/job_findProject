import React from "react";


const applicants = [
  { name: "William Olquin", role: "UI Designer", status: "Full Time", date: "06.05.2024" },
  { name: "Nicolas Williamson", role: "Mobile Dev", status: "Part Time", date: "07.05.2024" },
  { name: "Sara Cunningham", role: "HTML Dev", status: "Part Time", date: "08.05.2024" },
  { name: "Laurel Lawson", role: "UX Designer", status: "Full Time", date: "09.05.2024" },
];

const ApplicantsTable = () => {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title">Applicants</h3>
          <table className="table table-bordered mt-2">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant, index) => (
                <tr key={index}>
                  <td>{applicant.name}</td>
                  <td>{applicant.role}</td>
                  <td>{applicant.status}</td>
                  <td>{applicant.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsTable;
