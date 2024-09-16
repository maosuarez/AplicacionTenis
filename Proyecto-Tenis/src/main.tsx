import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./output.css";

//cd proyecto-tenis
//npx tailwindcss -i ./src/index.css -o ./src/output.css --watch

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
