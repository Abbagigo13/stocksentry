
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import Features from "./pages/Features.jsx";
import Architecture from "./pages/Architecture.jsx";
import Documentation from "./pages/Documentation.jsx";
import FAQ from "./pages/FAQ.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function NotFound() {
  return (
    <div className="content-page">
      <span className="section-kicker">404 · PAGE NOT FOUND</span>
      <h1>This page doesn't exist.</h1>
      <a className="primary-button" href="/">
        Return home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Public website */}
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/features" element={<Features />} />
      <Route path="/architecture" element={<Architecture />} />
      <Route path="/docs" element={<Documentation />} />
      <Route path="/faq" element={<FAQ />} />

      {/* Dashboard and its subroutes */}
      <Route path="/app/*" element={<Dashboard />} />

      {/* Unknown routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
