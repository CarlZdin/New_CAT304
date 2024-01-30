import React, { useState } from "react";
import "./GenerateResume.css";
import Sidebar from "./Sidebar";
import Body from "./Resume-components/Body/Body";
import { Link } from "react-router-dom";

function GenerateResume() {
  return (
    <div className="resume-container">
      <Sidebar />
      <div className="resume-main-content">
        <div className="resume-header-container">
          <div className="title-text">Generate Resume</div>
        </div>
        <Body />
      </div>
    </div>
  );
}

export default GenerateResume;
