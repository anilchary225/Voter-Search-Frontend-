import React, { useState } from "react";

export default function SearchBox({ query, setQuery, ward, setWard }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filterText, setFilterText] = useState("");

  const wardList = [
    "Ward 1",
    "Ward 2",
    "Ward 3",
    "Ward 4",
    "Ward 5",
    "Ward 6",
    "Ward 7",
    "Ward 8"
  ];

  const filteredWards = wardList.filter(w =>
    w.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Enter name / EPIC / house no"
        style={{
          padding: 12,
          width: "99%",
          fontSize: 18,
          borderRadius: 8,
          border: "1px solid #ccc",
          boxSizing: "border-box"
        }}
      />

      <div style={{ marginTop: 10, position: "relative" }}>
        {/* Custom dropdown button */}
        <div
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={{
            padding: 12,
            fontSize: 18,
            width: "99%",
            border: "1px solid #ccc",
            borderRadius: 8,
            cursor: "pointer",
            background: "#fff",
            boxSizing: "border-box"
          }}
        >
          {ward ? `Selected: Ward ${ward}` : "— Filter by Ward —"}
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div
            style={{
              position: "absolute",
              width: "100%",
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: 8,
              marginTop: 4,
              zIndex: 10,
              maxHeight: 250,
              overflowY: "auto",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          >
            {/* Searchable input */}
            <input
              placeholder="Search ward..."
              value={filterText}
              onChange={e => setFilterText(e.target.value)}
              style={{
                width: "95%",
                margin: 8,
                padding: 8,
                fontSize: 16,
                borderRadius: 6,
                border: "1px solid #ccc"
              }}
            />

            {filteredWards.length === 0 && (
              <div style={{ padding: 12, fontSize: 16, color: "#777" }}>
                No wards found
              </div>
            )}

            {/* Ward List */}
            {filteredWards.map((w, i) => {
              const wardNumber = i + 1;
              return (
                <div
                  key={i}
                  onClick={() => {
                    setWard(String(wardNumber));
                    setDropdownOpen(false);
                  }}
                  style={{
                    padding: 12,
                    fontSize: 18,
                    cursor: "pointer",
                    borderBottom: "1px solid #f0f0f0",
                    background:
                      ward === String(wardNumber) ? "#e7f3ff" : "#fff"
                  }}
                >
                  {w}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <button
        onClick={() => {
          setQuery("");
          setWard("");
          setFilterText("");
        }}
        style={{
          marginTop: 10,
          padding: "10px 20px",
          fontSize: 16,
          borderRadius: 8
        }}
      >
        Clear
      </button>
    </div>
  );
}
