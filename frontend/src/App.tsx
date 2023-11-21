import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          {/* <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
