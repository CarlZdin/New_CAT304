import React from "react";
import "./Home.css";
import "./Sidebar.css"; // Make sure to create this CSS file
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar"; // Import the Sidebar component

function Home() {
  return (
    <div className="home-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="homecontent-container">
        <div className="homeheader-container"></div>
        <div className="homemain-text-container">
          <div className="homemain-text">
            <div className="homediscover-text">
              Discover
              <br /> more than <br />
            </div>
            <div className="homejobs-text">500+ Jobs</div>
          </div>
          <div className="homesub-text">
            Great platform for the disabled job seeker that searching for new
            career heights and passionate about startups.
          </div>
        </div>
        <div className="homeregister-button">
          <Link
            to="/joblisting"
            className="link-style"
            style={{ color: "white" }}
          >
            Explore Jobs!
          </Link>
        </div>{" "}
      </div>
    </div>
  );
}

export default Home;
