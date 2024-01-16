import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <div>The website is temporarily unavailable.</div>
    {/* <App /> */}
  </Router>
);

