import React from "react";
import "../styles/Header.css";
import logo from "../assests/junglelogo.png";

export default function Header() {
  return (
    <h1 className="jh-banner" style={{ marginBottom: 0 }}>
      <img
        src={logo}
        alt="Logo of Jungle House is missing"
        className="jh-logo"
      ></img>
      Jungle House
    </h1>
  );
}
