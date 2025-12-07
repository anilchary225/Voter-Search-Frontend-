import React, { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./VoterDetails.css";

export default function VoterDetails({ voter, onClose, onEpicSearch }) {
  const [aadhaarMode, setAadhaarMode] = useState(false);
  const cardRef = useRef();

  if (!voter) return null;

  const handleDownloadPDF = async () => {
    const node = cardRef.current;
    if (!node) return;
    // Render to canvas
    const canvas = await html2canvas(node, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [canvas.width, canvas.height],
    });
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    const name = (voter.name || "voter").replace(/\s+/g, "_");
    pdf.save(`${name}_voter_card.pdf`);
  };

  

  const handleWhatsApp = () => {
    // Create friendly message
    const text = [
      `Name: ${voter.name || "-"}`,
      `${voter.relation_type || ""}: ${voter.relation_name || "-"}`,
      `Age: ${voter.age || "-"}`,
      `Gender: ${voter.gender || "-"}`,
      `Door: ${voter.door_no || "-"}`,
      `EPIC: ${voter.epic || "-"}`,
      `Ward: ${voter.ward || "-"}`,
    ].join("\n");
    const waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  const handleEpicSearchClick = () => {
    if (onEpicSearch && voter.epic) {
      onEpicSearch(voter.epic);
      onClose?.();
    }
  };

  return (
    <div className="details-overlay" onClick={onClose}>
      <div className="details-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="details-actions">
          <button onClick={handleDownloadPDF}>⬇️ Download PDF</button>
          <button onClick={handleWhatsApp}>💬 Share (WhatsApp)</button>
          <button onClick={() => setAadhaarMode((s) => !s)}>
            {aadhaarMode ? "Standard View" : "Aadhaar Card View"}
          </button>
          <button onClick={handleEpicSearchClick} disabled={!voter.epic}>
            🔎 Search EPIC
          </button>
        </div>

        <div
          className={`voter-card ${aadhaarMode ? "aadhaar" : ""}`}
          ref={cardRef}
        >
          {/* Header */}
          <div className="vc-header">
            <div className="vc-title">Village Voter Card</div>
            <div className="vc-ward">Ward: {voter.ward || "-"}</div>
          </div>

          {/* Body : two-column layout */}
          <div className="vc-body">
            <div className="vc-left">
              <div className="vc-field"><span className="label">Name</span><div className="value">{voter.name || "—"}</div></div>
              <div className="vc-field"><span className="label">Relation</span><div className="value">{(voter.relation_type || "") + " : " + (voter.relation_name || "—")}</div></div>
              <div className="vc-field"><span className="label">Age / Gender</span><div className="value">{(voter.age || "—") + " / " + (voter.gender || "—")}</div></div>
              <div className="vc-field"><span className="label">Door No</span><div className="value">{voter.door_no || "—"}</div></div>
            </div>

            <div className="vc-right">
              {/* <div className="photo-placeholder">{aadhaarMode ? "Photo" : " "}</div>
               */}
               <div className="qr-box">
               <QRCodeCanvas
                  value={
                    `Name: ${voter.name || "-"} | ` +
                    `EPIC: ${voter.epic || "-"} | ` +
                    `Ward: ${voter.ward || "-"} | ` +
                    `Door No: ${voter.door_no || "-"}`
                  }
                  size={150}
                  level="H"
                  bgColor="#ffffff"
                  fgColor="#000000"
                />
                </div>
              <div className="vc-field"><span className="label">EPIC</span><div className="value epic">{voter.epic || "—"}</div></div>
            </div>
          </div>

          {/* Footer */}
          <div className="vc-footer" style={{ display:"flex",flexDirection:"column",fontWeight:"bold", marginTop: aadhaarMode ? 20 : 0 ,alignItems:"center"}}>
            <p>Important:</p>
            <small>Data shown here is taken from the official Gram Panchayat voter rolls. If you find any mismatch or incorrect details, please verify your original voter information on the Telangana State Election Commission website. </small>
          </div>
        </div>
      </div>
    </div>
  );
}