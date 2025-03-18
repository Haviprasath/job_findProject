import React from "react";

const applicants = [
  { name: "William Olquin", role: "UI Designer", status: "Full Time", date: "06.05.2024" },
  { name: "Nicolas Williamson", role: "Mobile Dev", status: "Part Time", date: "07.05.2024" },
  { name: "Sara Cunningham", role: "HTML Dev", status: "Part Time", date: "08.05.2024" },
  { name: "Laurel Lawson", role: "UX Designer", status: "Full Time", date: "09.05.2024" },
];

const ApplicantsTable = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-2/3">
      <h3 className="text-md font-semibold">Applicants</h3>
      <table className="w-full mt-2 border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Role</th>
            <th className="p-2">Status</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{applicant.name}</td>
              <td className="p-2">{applicant.role}</td>
              <td className="p-2">{applicant.status}</td>
              <td className="p-2">{applicant.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicantsTable;
