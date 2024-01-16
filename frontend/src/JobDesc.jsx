import React from "react";
import "./JobDesc.css";
import "./Sidebar.css"; // Make sure to create this CSS file
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import BackIcon from "./assets/BackIcon.png";
import UserImage from "./assets/UserImage.png";

function JobDesc() {
  return (
    <div className="jobdesc-container">
      <Sidebar />
      <div className="jobdesc-maincontent">
        <div className="top-nav">
          <Link
            to="/joblisting"
            className="link-style"
            style={{ color: "white" }}
          >
            <img src={BackIcon} alt="Back Icon" className="back-icon" />
          </Link>

          <div className="navtext">Job Description</div>
        </div>

        <div className="jobdesc-bodycontent">
          <div className="jobinfo">
            <div className="company-image-container">
              <img src={UserImage} alt="Company" className="jobcompany-image" />
            </div>

            <div className="jobdescinfo">
              <div className="jobtitle">Social Media Assistant</div>

              <div className="additionaljobinfo">
                <div className="companyname">Stripe</div>
                <div className="location">Los Angeles</div>
                <div className="worktype">Full-time</div>
              </div>
            </div>
            <div className="applyjob-buttoncontainer">
              <div className="applyjob-button">Apply</div>
            </div>
          </div>

          <div className="job-detailed">
            <span className="jobinfo-title">Description</span>
            <p className="desc-detail">
              Stripe is looking for Social Media Marketing expert to help manage
              our online networks. You will be responsible for monitoring our
              social media channels, creating content, finding effective ways to
              engage the community and incentivize others to engage on our
              channels.
            </p>
            <span className="jobinfo-title">Responsibilities</span>
            <ul>
              <li>
                Community engagement to ensure that is supported and actively
                represented online
              </li>
              <li>Focus on social media content development and publication</li>
              <li>Marketing and strategy support</li>
              <li>
                Stay on top of trends on social media platforms, and suggest
                content ideas to the team
              </li>
              <li>Engage with online communities</li>
            </ul>

            <span className="jobinfo-title">Who You Are</span>
            <ul>
              <li>
                You get energy from people and building the ideal work
                environment
              </li>
              <li>
                You have a sense for beautiful spaces and office experiences
              </li>
              <li>
                You are a confident office manager, ready for added
                responsibilities
              </li>
              <li>You're detail-oriented and creative</li>
              <li>You're a growth marketer and know how to run campaigns</li>
            </ul>
            <span className="jobinfo-title">Nice-To-Haves</span>
            <ul>
              <li>Fluent in English</li>
              <li>Project management skills</li>
              <li>Copy editing skills</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDesc;
