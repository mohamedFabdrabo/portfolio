import React from "react";
import ReactDOM from "react-dom/client";
import emailjs from '@emailjs/browser';
import App from "./App.jsx";

// Initialize EmailJS
emailjs.init("mLhq2j22jDIfEpvJz");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
