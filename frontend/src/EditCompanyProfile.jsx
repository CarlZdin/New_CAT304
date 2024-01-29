import React from "react";
import "./UserProfile.css";
import SidebarCompany from "./SidebarCompany";
import CompanyLogo from "./assets/companylogo.jpg";
import EmailIcon from "./assets/EmailIcon.png";
import WheelchairIcon from "./assets/WheelchairIcon.png";

function EditCompanyProfile() {
  return (
    <div className="profile-container">
      <SidebarCompany />

      <div className="profile-main-content">
        <div className="profile-header-container">
          <div className="title-text">Settings</div>
          {/* "Edit Profile" button */}
        </div>

        <div className="profile-details">
          {/* Profile Header */}
          <div className="profile-header">
            {/* Profile Image */}
            <div className="profile-image-container">
              <img src={CompanyLogo} alt="Profile" className="profile-image" />
            </div>
            {/* User Info */}
            <div className="user-info">
              <h1 className="user-name">Nomad</h1>
              <p className="user-title">https://nomad.com</p>
            </div>
          </div>

          {/* About Me Section */}
          <div className="about-me-container">
            <div className="about-me-header">
              <div className="about-me-title">Company Profile</div>
              {/* Include an icon button if needed */}
            </div>
            <div className="about-me-content">
              <p>
                Nomad is a software platform for starting and running internet
                businesses. Millions of businesses rely on Stripe’s software
                tools to accept payments, expand globally, and manage their
                businesses online. Stripe has been at the forefront of expanding
                internet commerce, powering new business models, and supporting
                the latest platforms, from marketplaces to mobile commerce
                sites. We believe that growing the GDP of the internet is a
                problem rooted in code and design, not finance. Stripe is built
                for developers, makers, and creators. We work on solving the
                hard technical problems necessary to build global economic
                infrastructure—from designing highly reliable systems to
                developing advanced machine learning algorithms to prevent
                fraud.
              </p>
            </div>
          </div>

          <div className="additional-details-container">
            <div className="additional-details-header">
              <div className="additional-details-title">Contact</div>
            </div>

            <div className="additional-detail-item">
              <img src={EmailIcon} alt="Email Icon" className="details-icon" />
              <p>jakegyll@email.com</p>
            </div>

            {/* Add more detail items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCompanyProfile;
