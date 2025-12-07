import React, { useEffect, useState } from "react";
import SummaryCard from "./SummaryCard";
import WardSummaryCard from "./WardSummaryCard";
import VoterSearchPage from "../pages/VoterSearchPage";
import { API_BASE } from "../config";
import { Analytics } from '@vercel/analytics/react';
// import VoterByEpicPage from "../pages/VoterByEpicPage";
// import SearchBox from "./SearchBox";

export default function Dashboard() {
  const [summary, setSummary] = useState(null);
  const [wardSummary, setWardSummary] = useState({});

  useEffect(() => {
    async function load() {
      const s = await fetch(`${API_BASE}/summary`).then(r => r.json());
      const ws = await fetch(`${API_BASE}/ward-summaries`).then(r => r.json());
      setSummary(s);
      setWardSummary(ws);
    }
    load();
  }, []);

  if (!summary) return <p>Loading summary...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <div style={{display: "flex", flexDirection: "row",gap:5, alignItems: "center",justifyContent:"space-between",background: "rgba(104, 178, 95, 0.99)",padding:1}}>
        <img src="https://www.uxdt.nic.in/wp-content/uploads/2020/06/Election-Commission_Preview.png" height={100}   />
        <p style={{
          textAlign: "center",
          marginTop: 10,
          color: "#fff",
          fontSize: 14,
          
          padding: "8px 15px",
          borderRadius: "8px",
        }}>
          This website is provided only for searching Gram Panchayat voter details.
        </p>
      </div>
      <p style={{ textAlign: "center", marginTop: 10,
        color: "#fff",
        fontSize: 18,
        background: "rgb(79, 116, 219)",
        padding: "8px 15px",
        borderRadius: "8px", }}>
        “మీ ఓటు — మీ హక్కు, గ్రామ అభివృద్ధికి మీ సహకారం.”<br/>
        (Your vote is your right and your contribution to village development.)
      </p>
      <VoterSearchPage/>
      {/* <SearchBox/> */}
      {/* <VoterByEpicPage/> */}
      <h2>📊 Voter Summary Dashboard</h2>

      <SummaryCard summary={summary} />

      <h3>Ward-wise Summary</h3>
      <div style={styles.grid}>
        {Object.keys(wardSummary).map(w => (
          <WardSummaryCard key={w} ward={w} data={wardSummary[w]} />
        ))}
      </div>
      <footer
        style={{
          marginTop: "40px",
          padding: "15px",
          textAlign: "justify",
          fontSize: "16px",
          color: "#fff",
          background: "rgb(79, 116, 219)",
          borderRadius: "8px"
        }}
      ><span style={{fontWeight:"bold",marginBottom:5}}> Informational Note :</span><br/>
        Instead of searching your voter details manually in long PDF files, we built this
        website to make it easy for you to search your name, EPIC number, house number,
        and instantly know which ward you belong to along with complete details.
      </footer>
      <Analytics />
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  }
};