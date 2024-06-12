
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReactGA from "react-ga4";
  //YOUR_TRACKING_ID
  ReactGA.initialize("YOUR_TRACKING_ID");
  //YOUR_TRACKING_ID
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
