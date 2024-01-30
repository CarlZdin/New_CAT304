import React, { useState } from "react";
import "./FeedbackPage.css";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback) {
      setError("This field is empty.");
      return;
    }
    fetch("http://localhost:3000/addFeedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ feedback: feedback }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(() => setFeedback(""))
      .catch((error) => console.log("Error:", error));
  };

  return (
    <div className="feedback-container">
      <Sidebar />
      <div className="feedback-main-content">
        <div className="feedback-header-container">
          <div className="title-text">Feedback</div>
        </div>
        <div className="feedback-details">
          <div className="feedback-text-h">
            Submit your feedback
            <div className="feedback-text-h2">
              The following is required and will only be shared with PIE-OPD
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <textarea
              className="feedbacktext"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your feedback here..."
              rows="4"
              cols="50"
            />
            {error && <p className="error-text">{error}</p>}
            <button type="submit" className="feedback-submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
