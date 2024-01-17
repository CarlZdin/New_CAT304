import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./LoginPage";
import SignUp from "./SignUpPage";
import Home from "./Home";
import UserProfile from "./UserProfile";
import EditUserProfile from "./EditUserProfile";
import Feedback from "./FeedbackPage";
import TestApp from "./TestApp";
import JobListing from "./JobListing";
import JobDesc from "./JobDesc";
import Try from "./try";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/edituserprofile" element={<EditUserProfile />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/testapp" element={<TestApp />} />
        <Route path="/joblisting" element={<JobListing />} />
        <Route path="/jobdesc" element={<JobDesc />} />
        <Route path="/try" element={<Try />} />
      </Routes>
    </Router>
  );
}

export default App;
