// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import "./App.css";

import { Route, Routes } from "react-router-dom";
import HeroSection from "./Components/Home/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import About from "./Screen/About";
import Explore from "./Screen/Explore";
// import HeroSection from "./Screen/HeroSection";

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
