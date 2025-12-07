import React from "react";

export default function SummaryCard({ summary }) {
  return (
    <div className="summary-card" style={styles.card}>
      <h3>Village Summary</h3>

      <p><b>Total Voters:</b> {summary.total}</p>
      <p><b>Men:</b> {summary.men}</p>
      <p><b>Women:</b> {summary.women}</p>
      <p><b>Other:</b> {summary.other}</p>
      <p><b>SLNO Range:</b> {summary.starting_slno} → {summary.ending_slno}</p>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  }
};