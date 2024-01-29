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

function SidebarAdmin() {
  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="sidebar-brand-logo" />
      {/* Add your sidebar items here */}
      <div className="sidebar-container">
        <div className="sidebar-item">
          <img src={bagicon} alt="Bag Icon" className="sidebar-icon" />
          <div className="sidebar-text">
            <Link to="/admin" className="link-style" style={{ color: "black" }}>
              User Management{" "}
            </Link>
          </div>
        </div>

        <div className="sidebar-item">
          <img src={warningicon} alt="Warning Icon" className="sidebar-icon" />
          <div className="sidebar-text">
            <Link
              to="/feedbackadmin"
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

export default SidebarAdmin;
