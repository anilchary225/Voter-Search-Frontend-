import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import VoterCard from "../components/VoterCard";
import VoterDetails from "../components/VoterDetails";
import { API_BASE } from "../config";

export default function VoterSearchPage() {
  const [query, setQuery] = useState("");
  const [ward, setWard] = useState("");
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("Enter name / EPIC / house no or select ward");
  const [selectedVoter, setSelectedVoter] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (!query && !ward) {
        setResults([]);
        return;
      }

      try {
        if (query) {
          const r = await fetch(`${API_BASE}/search?q=${encodeURIComponent(query)}`);
          const data = await r.json();
          setResults(ward ? data.filter(x => String(x.ward) === String(ward)) : data);
        } else {
          const r = await fetch(`${API_BASE}/ward/${ward}`);
          const data = await r.json();
          setResults(data);
        }
      } catch {
        setMessage("Server error or voters.json not loaded.");
      }
    }
    fetchData();
  }, [query, ward]);

  return (
    <div className="container">
      <h1>Akanpally Village Voter Search</h1>
      <p className="muted">Public voter-list search. Non-political service.</p>

      <SearchBox query={query} setQuery={setQuery} ward={ward} setWard={setWard} />

      <div className="results">
        {results.length === 0 ? (
          <p className="muted">{message}</p>
        ) : (
          results.slice(0, 200).map((v, i) =>
            <VoterCard key={v.epic || `${v.house_no}-${i}`} voter={v} onSelect={setSelectedVoter} />
          )
        )}
      </div>

      {selectedVoter && (
        <VoterDetails
          voter={selectedVoter}
          onClose={() => setSelectedVoter(null)}
          onEpicSearch={(epic) => setQuery(epic)}
        />
      )}
    </div>
  );
}