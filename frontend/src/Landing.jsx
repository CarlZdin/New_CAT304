import React from "react";
import logo from "./assets/pie-opdLOGO.png"; // Adjust the path as necessary
import "./Landing.css";
import { Link } from "react-router-dom";
import vectorline from "C:/Users/user/Desktop/React/PIE-OPD-new/src/assets/Linevector.png";

function Landing() {
  return (
    <div className="landing-container">
      <div className="header-container">
        <img src={logo} alt="Logo" className="brand-logo" />
        <div className="login-signup-container">
          <div className="login-text">
            <Link to="/login" className="link-style">
              Login
            </Link>
          </div>
          <div className="signup-text">
            <Link
              to="/signup"
              className="link-style"
              style={{ color: "white" }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="main-text-container">
        <div className="main-text">
          <div className="discover-text">
            Discover
            <br /> more than <br />
          </div>
          <div className="jobs-text">500+ Jobs</div>
        </div>
        <div classNama="line-container">
          <img src={vectorline} alt="Linevector" />
        </div>
        <div className="sub-text">
          Great platform for the disabled job seeker that searching for new
          career heights and passionate about startups.
        </div>
      </div>
      <div className="register-button">
        <Link to="/signup" className="link-style" style={{ color: "white" }}>
          Register Now!
        </Link>
      </div>
    </div>
  );
}

export default Landing;
