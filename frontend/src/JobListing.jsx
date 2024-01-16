import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./JobListing.css";
import Sidebar from "./Sidebar";
import debounce from "lodash.debounce"; // Import debounce function
import { Link } from "react-router-dom";

const sampleLogoUrl =
  "https://static.vecteezy.com/system/resources/previews/000/395/417/original/modern-company-logo-design-vector.jpg";
// Mock job listings data
const mockJobListings = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCorp",
    location: "New York, NY",
  },
  {
    id: 2,
    title: "Graphic Designer",
    company: "DesignHub",
    location: "San Francisco, CA",
  },
  {
    id: 3,
    title: "Project Manager",
    company: "BuildIt",
    location: "Austin, TX",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataInsights",
    location: "Seattle, WA",
  },
  {
    id: 5,
    title: "UX/UI Designer",
    company: "CreativeMinds",
    location: "Los Angeles, CA",
  },
  {
    id: 6,
    title: "Frontend Developer",
    company: "CodeCrafters",
    location: "Chicago, IL",
  },
  {
    id: 7,
    title: "Marketing Specialist",
    company: "MarketPro",
    location: "Boston, MA",
  },
  {
    id: 8,
    title: "Financial Analyst",
    company: "FinancePlus",
    location: "Denver, CO",
  },
  {
    id: 9,
    title: "HR Coordinator",
    company: "TalentHub",
    location: "Miami, FL",
  },
  {
    id: 10,
    title: "Sales Representative",
    company: "SalesPros",
    location: "Dallas, TX",
  },
  {
    id: 11,
    title: "HR & Customer Support Specialist",
    company: "SupportGenius",
    location: "Phoenix, AZ",
  },
  {
    id: 12,
    title: "Network Administrator",
    company: "NetSolutions",
    location: "Philadelphia, PA",
  },
  {
    id: 13,
    title: "Healthcare Consultant",
    company: "HealthConnect",
    location: "Houston, TX",
  },
  {
    id: 14,
    title: "E-commerce Manager",
    company: "EcommBiz",
    location: "San Diego, CA",
  },
  {
    id: 15,
    title: "Operations Manager",
    company: "OpsTech",
    location: "Atlanta, GA",
  },
];

function JobListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [filteredJobs, setFilteredJobs] = useState(mockJobListings);

  const performSearch = () => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = mockJobListings.filter(
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

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleSearchButtonClick = () => {
    performSearch();
  };

  return (
    <div className="joblisting-container">
      <Helmet>{/* ... Helmet tags for SEO ... */}</Helmet>
      <Sidebar />

      <div className="joblisting-main-content">
        <div className="joblisting-header-container">
          <div className="title-text">Find Jobs</div>
          <div className="joblisting-header-function">
            <div className="search-bar-container">
              <input
                type="text"
                placeholder="Search for jobs..."
                value={searchTerm}
                onChange={handleInputChange}
              />
            </div>
            {/* Filter Bar */}
            <div className="filter-bar-container">
              <label htmlFor="locationFilter" className="filter-tittle">
                Location:
              </label>
              <select
                id="locationFilter"
                value={selectedLocation}
                onChange={handleLocationChange}
              >
                <option value="All">All</option>
                {/* Replace the next line with the actual list of unique locations from your job data */}
                {Array.from(
                  new Set(mockJobListings.map((job) => job.location))
                ).map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            {/* Search Button */}
            <button onClick={handleSearchButtonClick} className="button-style">
              Search
            </button>
          </div>
        </div>

        <div className="joblisting-details">
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
              <button className="view-job-button">
                <Link
                  to="/jobdesc"
                  className="link-style"
                  style={{ color: "white" }}
                >
                  View Job
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobListing;
