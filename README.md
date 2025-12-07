📘 About the Project

This project is built to solve a major difficulty in villages:

❌ Searching voter details manually from long PDF files

Instead, we created:

✅ A fast, searchable online Voter Lookup System

Where users can instantly search:
	•	🔍 By Name
	•	🆔 By EPIC Number
	•	🏠 By House Number
	•	🗳 Belonging Ward Number
	•	📋 Ward-wise Voter Summary
	•	📊 Complete Gram Panchayat Summary

It is optimized for:
	•	Gram Panchayat elections
	•	Village-level voter awareness
	•	Easy access for ward members & sarpanch teams
	•	Mobile-friendly usage

⸻

🚀 Features

🔎 Search Engine

✔ Search by Name / EPIC / House No
✔ Real-time suggestions
✔ Filters for ward
✔ Fast results (up to 500 matches)

📊 Dashboard

✔ Show total voters
✔ Ward-wise summary
✔ Gender statistics
✔ Auto-generated from processed PDF data

🧩 Voter Details Page

✔ Full details with clean layout
✔ QR code containing voter info
✔ Canva-style PDF voter card download
✔ WhatsApp sharing ready

🛠 Backend API

✔ Node.js + Express
✔ Endpoints for:
	•	/summary
	•	/ward-summaries
	•	/search?q=
	•	/ward/:ward
	•	/voter/:epic

🧠 Python Data Extractor

✔ Converts screenshot-based PDFs into text
✔ Cleans Telugu voter data
✔ Generates:
	•	consolidated voters.json
	•	summary
	•	ward_summary

⸻

🖥️ Tech Stack

    Layer                       Technology
Frontend                React, Vite, Tailwind/Custom CSS, React Router
Backend                 Node.js, Express, CORS
Data Processing         Python, OCR/Tesseract (optional), pdfplumber
Extra Tools             jsPDF, QRCode, html2canvas

📂 Folder Structure

Voter Search Project/
│── backend/
│    ├── server.js
│    ├── voters.json
│    └── ...
│
│── frontend/
│    ├── src/
│    │   ├── components/
│    │   ├── pages/
│    │   ├── routes/
│    │   ├── App.jsx
│    │   └── main.jsx
│    └── public/
│
└── extractor/
     ├── extract_ward.py
     ├── merge_wards.py
     └── input_pdfs/


🔌 API Documentation

1️⃣ Get Gram Panchayat Summary

GET /summary

2️⃣ Ward-wise summaries

GET /ward-summaries

3️⃣ Search voters

GET /search?q=<text>

4️⃣ Get voters in a ward

GET /ward/:ward

5️⃣ Get voter details by EPIC

GET /voter/:epic

🏗️ How to Run the Project

Backend

cd backend
npm install
npm start

Frontend

cd frontend
npm install
npm run dev


🧾 Generating Voter Data

extractor/input_pdfs/
python extract_ward.py
python merge_wards.py

This creates:
	•	voters.json
	•	summary
	•	ward_summary

Backend instantly loads these on start.

⸻

🌍 Deployment Guide

Deploy Backend (Render)
	1.	Go to https://render.com
	2.	Create new Web Service
	3.	Select backend folder
	4.	Set: Build Command: npm install
             Start Command: node server.js
    5.	Add environment:
        PORT = 4000


“మన ఓటు – మన గ్రామం భవిష్యత్‌!
సమర్థులైన వారిని ఎంచుకొని శుభ గ్రామపంచాయతీని నిర్మిద్దాం!”

⸻
Developed with love for villages, ward members, and teams working to create a better Gram Panchayat voter experience.