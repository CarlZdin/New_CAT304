import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./JobListing.css";
import SidebarAdmin from "./SidebarAdmin";
import debounce from "lodash.debounce"; // Import debounce function
import { Link } from "react-router-dom";

const sampleLogoUrl =
  "https://static.vecteezy.com/system/resources/previews/000/395/417/original/modern-company-logo-design-vector.jpg";
// Mock job listings data
const mockUserData = [
  {
    userid: 1,
    username: "Osman Abu",
    userrole: "Job Seeker",
    email: "osman@gmail.com",
  },
  {
    id: 2,
    username: "Osman Ali",
    userrole: "Job Seeker",
    email: "osali@gmail.com",
  },
  {
    id: 3,
    username: "TechCorp",
    userrole: "Company",
    email: "techcorp@gmail.com",
  },
  {
    id: 4,
    username: "MarketPro",
    userrole: "Company",
    email: "marketpro@gmail.com",
  },
];

function UserListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("All");
  const [filteredUsername, setFilteredUsername] = useState(mockUserData);

  const performSearch = () => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = mockUserData.filter(
      (user) =>
        user.username.toLowerCase().includes(lowercasedTerm) ||
        user.userrole.toLowerCase().includes(lowercasedTerm) ||
        user.email.toLowerCase().includes(lowercasedTerm)
    );

    const emailFiltered =
      selectedEmail !== "All"
        ? filtered.filter((user) => user.email === selectedEmail)
        : filtered;

    setFilteredUsername(emailFiltered);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEmailChange = (e) => {
    setSelectedEmail(e.target.value);
  };

  const handleSearchButtonClick = () => {
    performSearch();
  };

  return (
    <div className="joblisting-container">
      <Helmet>{/* ... Helmet tags for SEO ... */}</Helmet>
      <SidebarAdmin />

      <div className="joblisting-main-content">
        <div className="joblisting-header-container">
          <div className="title-text">User Management</div>
          <div className="joblisting-header-function">
            <div className="search-bar-container">
              <input
                type="text"
                placeholder="Search for users..."
                value={searchTerm}
                onChange={handleInputChange}
              />
            </div>
            {/* Filter Bar */}
            <div className="filter-bar-container">
              <label htmlFor="locationFilter" className="filter-tittle">
                Email:
              </label>
              <select
                id="locationFilter"
                value={selectedEmail}
                onChange={handleEmailChange}
              >
                <option value="All">All</option>
                {/* Replace the next line with the actual list of unique locations from your job data */}
                {Array.from(
                  new Set(mockUserData.map((user) => user.email))
                ).map((email) => (
                  <option key={email} value={email}>
                    {email}
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
          {filteredUsername.map((user) => (
            <div key={user.id} className="job-card">
              <img
                src={sampleLogoUrl}
                alt={`${user.userrole} logo`}
                className="company-logo"
              />
              <div className="job-description">
                <h3>{user.username}</h3>
                <p>
                  {user.userrole} - {user.userrole}
                </p>
              </div>
              <button className="view-job-button">
                <Link to="" className="link-style" style={{ color: "white" }}>
                  Approve
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserListing;
