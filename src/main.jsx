import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/fonts/RedHatText-Regular.ttf";
import "./assets/fonts/RedHatText-SemiBold.ttf";
import "./assets/fonts/RedHatText-Bold.ttf";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("portal")
);
