import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VoterDetails from "../components/VoterDetails";
import React from "react";
import { API_BASE } from "../config";

export default function VoterByEpicPage() {
  const { epic } = useParams();
  const [voter, setVoter] = useState(null);

  useEffect(() => {
    async function fetchVoter() {
      const r = await fetch(`${API_BASE}/voter/${epic}`);
      if (r.status === 404) {
        setVoter(null);
      } else {
        setVoter(await r.json());
      }
    }
    fetchVoter();
  }, [epic]);

  if (!voter) return <p>No voter found for EPIC: {epic}</p>;

  return (
    <VoterDetails voter={voter} onClose={() => {}} />
  );
}