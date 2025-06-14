import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import AboutUs from "./Components/AboutUs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Enhansoo">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path='*' element={<Eoor/>}/> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
