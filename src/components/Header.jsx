import React from "react";
import { FaTint } from "react-icons/fa";

export default function Header({ mode, toggleMode }) {
  return (
    <header className="header">
      <div className="header-left">
        <h1>
          <FaTint style={{ color: "#e63946", marginRight: "8px" }} />
          BloodConnect
        </h1>
        <p>Urgent Blood Donation Network</p>
      </div>
      <div className="header-right">
        <button onClick={toggleMode}>
          {mode === "request" ? "Switch to Donor Mode" : "Switch to Request Mode"}
        </button>
      </div>
    </header>
  );
}
