import React from "react";

export default function Requests({ requests, mode, updateDonation }) {
  if (!requests.length) return <p style={{ textAlign: "center" }}>No requests yet</p>;

  return (
    <div className="requests-container">
      {/* Desktop Table */}
      <div className="desktop-view">
        <table className="requests-table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Location</th>
              <th>Phone</th>
              <th>Blood Type</th>
              <th>Needed (ml)</th>
              <th>Donated (ml)</th>
              <th>Cash (₹)</th>
              <th>Urgency</th>
              {mode === "donor" && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {requests.map((r, i) => (
              <tr key={i} className={r.urgency.toLowerCase()}>
                <td>{r.doctorName}</td>
                <td>{r.location}</td>
                <td>{r.phone}</td>
                <td>{r.bloodType}</td>
                <td>{r.bloodNeeded}</td>
                <td>{r.bloodDonated}</td>
                <td>{r.donorCash}</td>
                <td>{r.urgency}</td>
                {mode === "donor" && (
                  <td>
                    <button
                      className="donate-btn"
                      onClick={() => {
                        const donation = prompt("Enter amount to donate (ml):");
                        if (!donation) return;
                        updateDonation(i, parseInt(donation));
                        alert(`You will receive ₹${r.donorCash} for this donation.`);
                      }}
                    >
                      Donate
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="mobile-view">
        {requests.map((r, i) => (
          <div className={`request-card ${r.urgency.toLowerCase()}`} key={i}>
            <p><strong>Doctor:</strong> {r.doctorName}</p>
            <p><strong>Location:</strong> {r.location}</p>
            <p><strong>Phone:</strong> {r.phone}</p>
            <p><strong>Blood Type:</strong> {r.bloodType}</p>
            <p><strong>Needed:</strong> {r.bloodNeeded} ml</p>
            <p><strong>Donated:</strong> {r.bloodDonated} ml</p>
            <p><strong>Cash:</strong> ₹{r.donorCash}</p>
            <p><strong>Urgency:</strong> {r.urgency}</p>
            {r.note && <p><strong>Note:</strong> {r.note}</p>}
            {mode === "donor" && (
              <button
                className="donate-btn"
                onClick={() => {
                  const donation = prompt("Enter amount to donate (ml):");
                  if (!donation) return;
                  updateDonation(i, parseInt(donation));
                  alert(`You will receive ₹${r.donorCash} for this donation.`);
                }}
              >
                Donate
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
