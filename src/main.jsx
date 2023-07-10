import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Sugar } from "react-preloaders";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
        {/* <Sugar background="#151516" color="#FFF" time={3000} /> */}
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
