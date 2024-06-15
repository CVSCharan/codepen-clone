import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../../pages/LandingPage/LandingPage";
import CodingPage from "../../pages/CodingPage/CodingPage";
import ExplorePage from "../../pages/Explore/Explore";
import ExploreCodingPage from "../EditorCodingPage/ExploreCodingPage";

export default function Layout() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/code" element={<CodingPage />} />
      <Route exact path="/explore" element={<ExplorePage />} />
      <Route exact path="/explore-editor" element={<ExploreCodingPage />} />
    </Routes>
  );
}
