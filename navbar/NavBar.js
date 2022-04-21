import NavBarCSS from "/navbar/NavBar.css";
import React, { useState, useEffect } from "react";

export default function Nav() {
  return (
    <div className="navbar rowa" style={NavBarCSS}>
      <ul className="nav-list one rowa">
        <li className="nav-item">
          <a href="#inserthomelink">ACASĂ</a>
        </li>
        <li className="nav-item">
          <a href="#insertarticleslink">ARTICOLE</a>
        </li>
        <li className="nav-item">
          <a href="#insertdonatelink">DONEAZĂ</a>
        </li>
      </ul>

      <ul className="nav-list two rowa">
        <li className="nav-item">
          <a href="#insertaboutlink">DESPRE</a>
        </li>
        <li className="nav-item bg current">
          <a href="#insertmyacclink">CONTUL MEU</a>
        </li>
      </ul>
    </div>
  );
}
