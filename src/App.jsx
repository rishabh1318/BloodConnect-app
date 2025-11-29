import React, { useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import PostRequest from "./components/PostRequest";
import Requests from "./components/Requests";

export default function App() {
  const [requests, setRequests] = useState(
    JSON.parse(localStorage.getItem("bloodRequests")) || []
  );
  const [mode, setMode] = useState("request"); // "request" or "donor"

  const addRequest = (newReq) => {
    const updated = [...requests, newReq];
    setRequests(updated);
    localStorage.setItem("bloodRequests", JSON.stringify(updated));
  };

  const toggleMode = () =>
    setMode(mode === "request" ? "donor" : "request");

const updateDonation = (index, amount) => {
  const updated = [...requests];
  updated[index].bloodDonated += amount;

  // Ensure donated doesn't exceed needed
  if (updated[index].bloodDonated >= updated[index].bloodNeeded) {
    // Remove the request completely
    updated.splice(index, 1);
  }

  setRequests(updated);
  localStorage.setItem("bloodRequests", JSON.stringify(updated));
};


  return (
    <div className="container">
      <Header mode={mode} toggleMode={toggleMode} />
      <Stats requests={requests} />
      <div className="main">
        {mode === "request" && (
          <div className="form-section">
            <PostRequest addRequest={addRequest} />
          </div>
        )}
        <div className="requests-section">
          <h2>Blood Requests</h2>
          <Requests
            requests={requests}
            mode={mode}
            updateDonation={updateDonation}
          />
        </div>
      </div>
    </div>
  );
}
