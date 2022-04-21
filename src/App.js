import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "/navbar/App1.js";
import Main from "/mainacccont/App2.js";
import Footer from "/footer/Footer.js";

export default function App() {
  return (
    <div className="oui container-fluid m-0 p-0">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}
