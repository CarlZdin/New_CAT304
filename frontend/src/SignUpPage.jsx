import React, { useState } from "react";
import axios from "axios";
import logo from "./assets/pie-opdLOGO.png";
import disabilitiesImage from "./assets/Disabilities.png";
import "./LoginPage.css"; // Ensure this path is correct
import { Link } from "react-router-dom";

function SignUp() {
  const [role_id, setRole] = useState(null);
  const [user_email, setEmail] = useState("");
  const [user_name, setUsername] = useState("");
  const [user_password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/addUser',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ role: role_id, email: user_email, username: user_name, password:user_password, confirmPassword:confirmPassword }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.log("Error:", error));
    if(user_password !== confirmPassword) {
      setError("Password do not match");
      return;
    }
  };

  return (
    <div className="login-page">
      <div className="image-container">
        <img
          src={disabilitiesImage}
          alt="Disabilities"
          className="side-image"
        />
        <div className="overlay-text">
          <span className="empowering-text">
            Empowering
            <br />
          </span>
          <span className="every-ability-text">Every Ability</span>
        </div>
      </div>

      <div className="login-wrapper">
        <img src={logo} alt="Logo" className="logo" />
        <div className="welcome-text">Get More Opportunities</div>
        <div className="login-container">
          <form onSubmit={handleSignUp}>
            <div onChange={e => setRole(e.target.value === "employee")}>
            <input type="radio" value="Applicant" name="role" /> Applicant
            <input type="radio" value="employee" name="role" /> Employer
            </div>
            <input
              type="email"
              className="input-field"
              value={user_email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="username"
              className="input-field"
              value={user_name}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Full Name"
            />
            <input
              type="password"
              className="input-field"
              value={user_password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <input
              type="password"
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-btn">
              <Link
                to="/login"
                className="link-style"
                style={{ color: "white" }}
              >
                Sign Up
              </Link>
            </button>
          </form>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
