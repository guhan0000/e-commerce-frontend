import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { FavProvider } from "./context/FavContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FavProvider>
      <App />
    </FavProvider>
  </BrowserRouter>,
);
