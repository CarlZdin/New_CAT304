import React, { useState } from "react";
import axios from "axios";
import logo from "./assets/pie-opdLOGO.png";
import disabilitiesImage from "./assets/Disabilities.png";
import "./LoginPage.css"; // Ensure this path is correct
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Add more states as needed (e.g., username)
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   setError("Passwords do not match.");
    //   return;
    // }
    // try {
    //   // Axios call to your backend signup endpoint
    //   const response = await axios.post("http://localhost:3000/signup", {
    //     email,
    //     password,
    //   });
    //   // Handle response
    //   setError("");
    // } catch (err) {
    //   setError(err.response ? err.response.data.message : "Signup failed");
    // }
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
            <input
              type="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              className="input-field"
              value={password}
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
