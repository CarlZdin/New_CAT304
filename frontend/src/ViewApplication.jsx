import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./ViewApplication.css";
import SidebarCompany from "./SidebarCompany";
import debounce from "lodash.debounce"; // Import debounce function
import { Link } from "react-router-dom";

const sampleLogoUrl =
  "https://static.vecteezy.com/system/resources/previews/000/395/417/original/modern-company-logo-design-vector.jpg";
// Mock job listings data
const mockApplication = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCorp",
    location: "Kulim, Kedah",
  },
  {
    id: 2,
    title: "Graphic Designer",
    company: "DesignHub",
    location: "Bayan Lepas, Pulau Pinang",
  },
  {
    id: 3,
    title: "Project Manager",
    company: "BuildIt",
    location: "Gorgetown, Pulau Pinang",
  },
];

function ViewApplication() {
  const [filteredJobs, setFilteredJobs] = useState(mockApplication);

  const performSearch = () => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = mockApplication.filter(
      (job) =>
        job.title.toLowerCase().includes(lowercasedTerm) ||
        job.company.toLowerCase().includes(lowercasedTerm) ||
        job.location.toLowerCase().includes(lowercasedTerm)
    );

    const locationFiltered =
      selectedLocation !== "All"
        ? filtered.filter((job) => job.location === selectedLocation)
        : filtered;

    setFilteredJobs(locationFiltered);
  };

  return (
    <div className="ViewApplication-container">
      <Helmet>{/* ... Helmet tags for SEO ... */}</Helmet>
      <SidebarCompany />

      <div className="ViewApplication-main-content">
        <div className="ViewApplication-header-container">
          <div className="title-text">Job Applications</div>
          <div className="ViewApplication-header-function"></div>
        </div>

        <div className="ViewApplication-details">
          {filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <img
                src={sampleLogoUrl}
                alt={`${job.company} logo`}
                className="company-logo"
              />
              <div className="job-description">
                <h3>{job.title}</h3>
                <p>
                  {job.company} - {job.location}
                </p>
              </div>
              <button className="view-job-button">View Application</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewApplication;
