import React, { useEffect, useState } from "react";
import "./FeedbackAdmin.css";
import SidebarAdmin from "./SidebarAdmin";
import { Link } from "react-router-dom";

function FeedbackAdmin() {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await fetch ('http://localhost:3000/api/feedbacks');
      const data = await response.json();
      setFeedbacks(data);
    };

    fetchFeedbacks();
  }, []);

  if(!feedbacks) return 'Loading.....'

  return (
    <div className="FeedbackAdminContain">
      <SidebarAdmin />
      <div className="FeedbackAdmin-Header">
        <span className="FeedbackTitle">Feedback Management</span>
      </div>
      <div className="FeedBackAdmin-Body">
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback) => (
            <div key={feedback.feedback_id} className="feedbackBox">
              <p>{feedback.feedback_desc}</p>
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
