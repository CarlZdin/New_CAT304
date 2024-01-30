import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./PostJobListing.css";
import SidebarCompany from "./SidebarCompany";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";

function PostJobListing() {
  const [job, setJob] = useState({
    title: "",
    description: "",
    location: "",
  });

  const [jobs, setJobs] = useState([]);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  fetch('http://localhost:3000/PostJob', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jobTitle: job.title,
      desc: job.description,
      location: job.location,
    }),
  })
    .then(response => response.json())
    .then(() => {
      setJobs([...jobs, job]);
      setJob({
        title: "",
        description: "",
        location: "",
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    setJobs([...jobs, job]);
      setJob({
        title: "",
        description: "",
        location: "",
      });
};

  const handleDelete = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs.splice(index, 1);
    setJobs(updatedJobs);
  };

  return (
    <div className="postjoblisting-container">
      <Helmet>{/* ... Helmet tags for SEO ... */}</Helmet>
      <SidebarCompany />

      <div className="postjoblisting-main-content">
        <div className="postjoblisting-header-container">
          <div className="postjoblisting-title-text">Post A Job</div>
          <div className="postjoblisting-header-function"></div>
        </div>

        <div className="postform-container">
          <form onSubmit={handleSubmit}>
            <label>
              Job Title:
              <input
                type="text"
                name="title"
                value={job.title}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Job Description:
              <textarea
                name="description"
                value={job.description}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Job Location:
              <input
                type="text"
                name="location"
                value={job.location}
                onChange={handleChange}
                required
              />
            </label>
            <input
              className="postbutton-style"
              type="submit"
              value="Post Job"
            />
          </form>
        </div>

        <div className="postjob-cards-container">
          {jobs.map((job, index) => (
            <div key={index} className="postjob-card">
              <button onClick={() => handleDelete(index)}>Delete</button>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p>{job.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostJobListing;
