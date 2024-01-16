import React from "react";
import "./UserProfile.css";
import Sidebar from "./Sidebar";
import UserImage from "./assets/UserImage.png";
import EmailIcon from "./assets/EmailIcon.png";
import WheelchairIcon from "./assets/WheelchairIcon.png";

function EditUserProfile() {
  return (
    <div className="profile-container">
      <Sidebar />

      <div className="profile-main-content">
        <div className="profile-header-container">
          <div className="title-text">Settings</div>
        </div>

        <div className="profile-details">
          {/* Profile Header */}
          <div className="profile-header">
            {/* Profile Image */}
            <div className="profile-image-container">
              <img src={UserImage} alt="Profile" className="profile-image" />
            </div>
            {/* User Info */}
            <div className="user-info">
              <h1 className="user-name">Alexis Wolen</h1>
              <p className="user-title">UX Designer</p>
            </div>
          </div>

          {/* About Me Section */}
          <div className="about-me-container">
            <div className="about-me-header">
              <div className="about-me-title">About Me</div>
              {/* Include an icon button if needed */}
            </div>
            <div className="about-me-content">
              <p>
                I’m a product designer + filmmaker currently working remotely at
                Twitter from beautiful Manchester, United Kingdom. I’m
                passionate about designing digital products that have a positive
                impact on the world.
              </p>
              <p>
                For 10 years, I’ve specialised in interface, experience &
                interaction design as well as working in user research and
                product strategy for product agencies, big tech companies &
                start-ups.
              </p>
            </div>
          </div>

          <div className="additional-details-container">
            <div className="additional-details-header">
              <div className="additional-details-title">Additional Details</div>
            </div>

            <div className="additional-detail-item">
              <img src={EmailIcon} alt="Email Icon" className="details-icon" />
              <p>jakegyll@email.com</p>
            </div>
            <div className="additional-detail-item">
              <img
                src={WheelchairIcon}
                alt="WheelChair Icon"
                className="details-icon"
              />
              <p>Deaf</p>
            </div>
            {/* Add more detail items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUserProfile;
