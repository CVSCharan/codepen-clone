import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import SrcDocProvider from "./context/SrcDocContext";
import SelectedViewProvider from "./context/SelectedView";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <SrcDocProvider>
        <SelectedViewProvider>
          <App />
        </SelectedViewProvider>
      </SrcDocProvider>
    </Router>
  </React.StrictMode>
);
