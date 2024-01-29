import React, { useEffect, useState } from "react";
import "./FeedbackAdmin.css";
import SidebarAdmin from "./SidebarAdmin";
import { Link } from "react-router-dom";

function FeedbackAdmin() {
  const [feedbacks, setFeedbacks] = useState([]);

  // assuming the api endpoint as '/api/feedbacks'
  useEffect(() => {
    fetch("/api/feedbacks")
      .then((response) => response.json())
      .then((data) => {
        setFeedbacks(data);
      });
  }, []);

  return (
    <div className="FeedbackAdminContain">
      <SidebarAdmin />
      <div className="FeedbackAdmin-Header">
        <span className="FeedbackTitle">Feedback Management</span>
      </div>
      <div className="FeedBackAdmin-Body">
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback) => (
            <div key={feedback.id} className="feedback">
              <h4>{feedback.user}</h4>
              <p>{feedback.message}</p>
            </div>
          ))
        ) : (
          <p>No feedbacks yet.</p>
        )}
      </div>
    </div>
  );
}

export default FeedbackAdmin;
