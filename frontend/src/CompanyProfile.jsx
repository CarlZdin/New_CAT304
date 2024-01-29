import React, { useState } from "react";
import "./CompanyProfile.css";
import SidebarCompany from "./SidebarCompany";
import EmailIcon from "./assets/EmailIcon.png";
import CompanyLogo from "./assets/modern-company-logo-design-vector.jpg";
import { Link } from "react-router-dom";

function CompanyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [companyName, setCompanyName] = useState("Nomad");
  const [companyWebsite, setCompanyWebsite] = useState("https://nomad.com");
  const [companyDescription, setCompanyDescription] = useState(
    "Nomad is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud."
  );
  const [companyEmail, setCompanyEmail] = useState("jakegyll@email.com");
  const [companyLogo, setCompanyLogo] = useState(CompanyLogo); // Updated the initial logo path

  const handleSave = () => {
    setIsEditing(false); // Save button clicked, set editing to false
    // You can add logic to save the edited values to your data store here
  };

  const handleLogoChange = (e) => {
    // Handle the logo file upload
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCompanyLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <SidebarCompany />

      <div className="profile-main-content">
        <div className="profile-header-container">
          <div className="title-text">Company Profile</div>
          {/* "Edit Profile" button */}
          <button
            onClick={() => {
              if (isEditing) {
                handleSave(); // Save changes when "Save" button is clicked
              }
              setIsEditing(!isEditing); // Toggle isEditing state
            }}
            className="link-style"
            style={{ color: "white" }}
          >
            {isEditing ? "Save" : "Edit Profile"}
          </button>
        </div>

        <div className="profile-details">
          {/* Profile Header */}
          <div className="profile-header">
            {/* Profile Image */}
            <div className="profile-image-container">
              {isEditing ? (
                <>
                  <label htmlFor="logoUpload" className="logo-upload-label">
                    <img
                      src={companyLogo}
                      alt="Profile"
                      className="profile-image-editable"
                      style={{ maxWidth: "200px", maxHeight: "200px" }} // Moved the styles here
                      onClick={() => {
                        if (isEditing) {
                          document.getElementById("logoUpload").click();
                        }
                      }}
                    />
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="logoUpload"
                    onChange={handleLogoChange}
                    style={{ display: "none" }}
                  />
                </>
              ) : (
                <img
                  src={companyLogo}
                  alt="Profile"
                  className="profile-image"
                  onClick={() => {
                    if (isEditing) {
                      document.getElementById("logoUpload").click();
                    }
                  }}
                />
              )}
            </div>
            {/* User Info */}
            <div className="user-info">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <h1 className="user-name">{companyName}</h1>
                  <p className="user-title">{companyWebsite}</p>
                </>
              )}
            </div>
          </div>

          {/* About Me Section */}
          <div className="about-me-container">
            <div className="about-me-header">
              <div className="about-me-title">Company Profile</div>
              {/* Include an icon button if needed */}
            </div>
            {isEditing ? (
              <textarea
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              />
            ) : (
              <div className="about-me-content">
                <p>{companyDescription}</p>
              </div>
            )}
          </div>

          <div className="additional-details-container">
            <div className="additional-details-header">
              <div className="additional-details-title">Contact</div>
            </div>
            <div className="additional-detail-item">
              <img src={EmailIcon} alt="Email Icon" className="details-icon" />
              {isEditing ? (
                <input
                  type="text"
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                />
              ) : (
                <p>{companyEmail}</p>
              )}
            </div>
            {/* Add more detail items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
