import React, { useState } from "react";
import "./FeedbackPage.css";
import SidebarCompany from "./SidebarCompany";
import { Link } from "react-router-dom";

function FeedbackCompany() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have a Supabase instance set up
    // You would replace this with your actual Supabase API calls
    // For example:
    // await supabase.from('feedback').insert({ message: feedback });

    // Add any additional logic or API calls here

    // Clear the feedback field after submission
    setFeedback("");
  };

  return (
    <div className="feedback-container">
      <SidebarCompany />
      <div className="feedback-main-content">
        <div className="feedback-header-container">
          <div className="title-text">Feedback</div>
        </div>
        <div className="feedback-details">
          <form onSubmit={handleSubmit}>
            <textarea
              className="feedbacktext"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your feedback here..."
              rows="4"
              cols="50"
            />
            <button
              type="submit"
              className="feedback-submit-button"
              disabled={!feedback.trim()}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCompany;
