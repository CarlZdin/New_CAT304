import React from "react";
import "./Sidebar.css"; // Make sure to create this CSS file
import logo from "./assets/pie-opdLOGO.png";
import homeicon from "./assets/HomeIcon.png";
import chaticon from "./assets/ChatIcon.png";
import bagicon from "./assets/BagIcon.png";
import profileicon from "./assets/ProfileIcon.png";
import searchicon from "./assets/SearchIcon.png";
import warningicon from "./assets/WarningIcon.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="sidebar-brand-logo" />
      {/* Add your sidebar items here */}
      <div className="sidebar-container">
        <div className="sidebar-item">
          <img src={homeicon} alt="Home Icon" className="sidebar-icon" />
          <div className="sidebar-text">
            <Link to="/home" className="link-style" style={{ color: "black" }}>
              Home
            </Link>
          </div>
        </div>
        <div className="sidebar-item">
          <img src={searchicon} alt="Search Icon" className="sidebar-icon" />
          <div className="sidebar-text">
            <Link
              to="/joblisting"
              className="link-style"
              style={{ color: "black" }}
            >
              Job Search
            </Link>
          </div>
        </div>
        <div className="sidebar-item">
          <img src={bagicon} alt="Bag Icon" className="sidebar-icon" />
          <div className="sidebar-text">My Applications </div>
        </div>

        <div className="sidebar-item">
          <img src={homeicon} alt="Home Icon" className="sidebar-icon" />
          <div className="sidebar-text">
            <Link
              to="/resume"
              className="link-style"
              style={{ color: "black" }}
            >
              Resume
            </Link>
          </div>
        </div>

        <div className="sidebar-item">
          <div className="sidebar-text">SETTINGS</div>
        </div>
        <div className="sidebar-item">
          <img src={profileicon} alt="Profile Icon" className="sidebar-icon" />
          <div className="sidebar-text">
            <Link
              to="/userprofile"
              className="link-style"
              style={{ color: "black" }}
            >
              Profile
            </Link>
          </div>
        </div>
        <div className="sidebar-item">
          <img src={warningicon} alt="Warning Icon" className="sidebar-icon" />
          <div className="sidebar-text">
            <Link
              to="/feedback"
              className="link-style"
              style={{ color: "black" }}
            >
              Feedback
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
