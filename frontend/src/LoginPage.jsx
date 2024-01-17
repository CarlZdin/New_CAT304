import React, { useEffect, useState } from "react";
import logo from "./assets/pie-opdLOGO.png";
import disabilitiesImage from "./assets/Disabilities.png";
import "./LoginPage.css"; // Ensure this path is correct
import { Link } from "react-router-dom";

function Login() {
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        email: user_email,
        password: user_password,
      }),
    });

    if (response.ok){
      const userData = await response.json();
    } else{

      setError("Unable to log in. Please check your credentials.")
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
        <div className="welcome-text">Welcome Back, Dude</div>
        <div className="login-container">
          <form onSubmit={handleLogin}>
            <input
              type="email"
              className="input-field"
              value={user_email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              className="input-field"
              value={user_password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-btn">
              <Link
                to="/home"
                className="link-style"
                style={{ color: "white" }}
              >
                Login
              </Link>
            </button>
          </form>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
