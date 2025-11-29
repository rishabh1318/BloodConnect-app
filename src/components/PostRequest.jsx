import React, { useState } from "react";

export default function PostRequest({ addRequest }) {
  const [form, setForm] = useState({
    doctorName: "",
    location: "",
    phone: "",
    bloodType: "",
    bloodNeeded: "",
    donorCash: "",
    urgency: "",
    note: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addRequest({ ...form, bloodDonated: 0 });
    setForm({
      doctorName: "",
      location: "",
      phone: "",
      bloodType: "",
      bloodNeeded: "",
      donorCash: "",
      urgency: "",
      note: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        name="doctorName"
        value={form.doctorName}
        onChange={handleChange}
        placeholder="Doctor's Name"
        required
      />
      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="City / Hospital"
        required
      />
      <input
        name="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        placeholder="Contact Phone"
        required
      />
      <input
        name="bloodType"
        value={form.bloodType}
        onChange={handleChange}
        placeholder="Blood Type (e.g. A+)"
        required
      />
      <input
        name="bloodNeeded"
        type="number"
        value={form.bloodNeeded}
        onChange={handleChange}
        placeholder="Blood Needed (ml)"
        required
      />
      <input
        name="donorCash"
        type="number"
        value={form.donorCash}
        onChange={handleChange}
        placeholder="Cash for Donor (₹)"
        required
      />
      <select
        name="urgency"
        value={form.urgency}
        onChange={handleChange}
        required
      >
        <option value="">Select urgency</option>
        <option value="Critical">Critical</option>
        <option value="Urgent">Urgent</option>
        <option value="Routine">Routine</option>
      </select>
      <textarea
        name="note"
        value={form.note}
        onChange={handleChange}
        placeholder="Short Note"
      />
      <button type="submit">Post Request</button>
    </form>
  );
}
