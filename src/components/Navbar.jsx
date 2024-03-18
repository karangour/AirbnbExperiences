import React from "react";
import logo from "./../../public/assets/airbnb-logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} className='logo'></img>
    </div>
  );
}
