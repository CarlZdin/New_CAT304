import React from "react";
import "./FeedbackPage.css";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Feedback() {
  return (
    <div className="feedback-container">
      <Sidebar />
      <div className="feedback-main-content">
        <div className="feedback-header-container">
          <div className="title-text">Feedback</div>
          {/* "Edit Profile" button */}
          <div className="feedback-submit-button">
            <Link to="/home" className="link-style" style={{ color: "white" }}>
              Submit Feedback
            </Link>
          </div>
        </div>
        <div className="feedback-details">
          {/* Profile Header */}
          <div className="feedback-header"></div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
