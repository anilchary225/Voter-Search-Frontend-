import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import VoterSearchPage from "./pages/VoterSearchPage";
import VoterByEpicPage from "./pages/VoterByEpicPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/search" element={<VoterSearchPage />} /> */}
        <Route path="/voter/:epic" element={<VoterByEpicPage />} />
      </Routes>
    </BrowserRouter>
  );
}