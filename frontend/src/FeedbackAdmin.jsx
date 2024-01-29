import React from "react";
import "./FeedbackAdmin.css";
import SidebarAdmin from "./SidebarAdmin";
import { Link } from "react-router-dom";

function FeedbackAdmin() {
  return (
    <div className="FeedbackAdminContain">
      <SidebarAdmin />
      <div className="FeedbackAdmin-Header">
        <span className="FeedbackTitle">Feedback Management</span>
      </div>
      <div className="FeedBackAdmin-Body"></div>
    </div>
  );
}

export default FeedbackAdmin;
