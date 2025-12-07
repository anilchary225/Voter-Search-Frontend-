import React from "react";
import "./VoterCard.css";

export default function VoterCard({ voter, onSelect }) {
  return (
    <div className="card" role="button" onClick={() => onSelect(voter)}>
      <div className="card-top">
        <div className="name">{voter.name}</div>
        <div className="epic">{voter.epic}</div>
      </div>
      <div className="card-bottom">
        <div>{voter.relation_type}: {voter.relation_name}</div>
        <div>Door: {voter.door_no}</div>
      </div>
    </div>
  );
}