import React, { useState } from "react";
import "./UserProfile.css";
import Sidebar from "./Sidebar";
import UserImage from "./assets/UserImage.png";
import EmailIcon from "./assets/EmailIcon.png";
import WheelchairIcon from "./assets/WheelchairIcon.png";
import { Link } from "react-router-dom";

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("Alexis Wolen");
  const [userTitle, setUserTitle] = useState("UI Designer");
  const [aboutMe, setAboutMe] = useState(
    "I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world."
  );
  const [email, setEmail] = useState("jakegyll@email.com");
  const [type, setType] = useState("Deaf");
  const [profileImage, setProfileImage] = useState(UserImage);

  const handleSave = () => {
    setIsEditing(false); // Save button clicked, set editing to false
    // You can add logic to save the edited values to your data store here
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfileImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <Sidebar />

      <div className="profile-main-content">
        <div className="profile-header-container">
          <div className="title-text">My Profile</div>

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
          <div className="profile-header">
            <div className="profile-image-container">
              {isEditing ? (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                    id="imageInput"
                  />
                  <label htmlFor="imageInput">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="profile-image editable-image"
                    />
                  </label>
                </>
              ) : (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-image"
                />
              )}
            </div>
            <div className="user-info">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={userTitle}
                    onChange={(e) => setUserTitle(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <h1 className="user-name">{userName}</h1>
                  <p className="user-title">{userTitle}</p>
                </>
              )}
            </div>
          </div>

          <div className="about-me-container">
            <div className="about-me-header">
              <div className="about-me-title">About Me</div>
            </div>
            <div className="about-me-content">
              {isEditing ? (
                <textarea
                  value={aboutMe}
                  onChange={(e) => setAboutMe(e.target.value)}
                />
              ) : (
                <p>{aboutMe}</p>
              )}
            </div>
          </div>

          <div className="additional-details-container">
            <div className="additional-details-header">
              <div className="additional-details-title">Additional Details</div>
            </div>
            <div className="additional-detail-item">
              <img src={EmailIcon} alt="Email Icon" className="details-icon" />
              {isEditing ? (
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <p>{email}</p>
              )}
            </div>
            <div className="additional-detail-item">
              <img
                src={WheelchairIcon}
                alt="WheelChair Icon"
                className="details-icon"
              />
              {isEditing ? (
                <input
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              ) : (
                <p>{type}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
