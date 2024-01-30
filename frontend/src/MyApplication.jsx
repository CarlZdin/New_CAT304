import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./MyApplication.css";
import Sidebar from "./Sidebar";
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

function MyApplication() {
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
    <div className="MyApplication-container">
      <Helmet>{/* ... Helmet tags for SEO ... */}</Helmet>
      <Sidebar />

      <div className="MyApplication-main-content">
        <div className="MyApplication-header-container">
          <div className="title-text">My Application</div>
          <div className="MyApplication-header-function"></div>
        </div>

        <div className="MyApplication-details">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyApplication;
