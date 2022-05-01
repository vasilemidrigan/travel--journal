import React from "react";
// Import logo
import logo from "../images/globe-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logo} className="header--logo" alt="glob logo" />
      <h4 className="header--h4">vasile's travel journal</h4>
    </header>
  );
}
