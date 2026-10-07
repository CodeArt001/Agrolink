import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/geist-sans";
import "@fontsource/geist-mono";
import "@fontsource-variable/inter";

if (!OWN_HOSTS.includes(window.location.hostname)) {
  document.title = "Cephas Suite";
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
