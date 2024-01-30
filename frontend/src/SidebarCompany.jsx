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

function SidebarCompany() {
  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="sidebar-brand-logo" />
      {/* Add your sidebar items here */}
      <div className="sidebar-container">
        <div className="sidebar-item">
          <img src={homeicon} alt="Home Icon" className="sidebar-icon" />
          <div className="sidebar-text">
            <Link
              to="/homecompany"
              className="link-style"
              style={{ color: "black" }}
            >
              Home
            </Link>
          </div>
        </div>
        <div className="sidebar-item">
          <img src={searchicon} alt="Search Icon" className="sidebar-icon" />
          <div className="sidebar-text">
            <Link
              to="/postjob"
              className="link-style"
              style={{ color: "black" }}
            >
              Post A Job
            </Link>
          </div>
        </div>
        <div className="sidebar-item">
          <img src={bagicon} alt="Bag Icon" className="sidebar-icon" />
          <div className="sidebar-text">
            <Link
              to="/viewapplication"
              className="link-style"
              style={{ color: "black" }}
            >
              Job Applications
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
              to="/companyprofile"
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
              to="/companyfeedback"
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

export default SidebarCompany;
