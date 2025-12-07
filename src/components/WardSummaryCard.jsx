import React from "react";
import { Link } from "react-router-dom";

export default function WardSummaryCard({ ward, data }) {

  
  return (
    <div className="ward-card" style={styles.card}>
      <h4>Ward {ward}</h4>

      <p><b>Total:</b> {data.total}</p>
      <p><b>Men:</b> {data.men}</p>
      <p><b>Women:</b> {data.women}</p>
      <p><b>Other:</b> {data.other}</p>
      {/* <p><b>SLNO:</b>  → </p> */}
      
    </div>
  );
}

const styles = {
  card: {
    background: "#f8f8f8",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
  }
};