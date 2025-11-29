import React from "react";

export default function Stats({ requests }) {
  const critical = requests.filter(r => r.urgency === "Critical").length;
  const urgent = requests.filter(r => r.urgency === "Urgent").length;
  const routine = requests.filter(r => r.urgency === "Routine").length;
  const active = requests.filter(r => r.bloodDonated < r.bloodNeeded).length;
  const fulfilled = requests.filter(r => r.bloodDonated >= r.bloodNeeded).length;

  return (
    <div className="stats">
      <div className="card critical"><h3>Critical</h3>{critical}</div>
      <div className="card urgent"><h3>Urgent</h3>{urgent}</div>
      <div className="card routine"><h3>Routine</h3>{routine}</div>
      <div className="card active"><h3>Active</h3>{active}</div>
      <div className="card fulfilled"><h3>Fulfilled</h3>{fulfilled}</div>
    </div>
  );
}
