import React from "react";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <div className="bg-white text-black fixed top-0 right-0 left-0 py-4 px-20">
      <div className="flex flex-row items-center justify-between">
        <a href="/" className="flex flex-row  items-center gap-4">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="font-sans text-xl font-semibold">PawPals</span>
        </a>
        <div className="flex flex-row gap-4">
          <a href="/home" className="flex flex-row  items-center gap-4">
            <span className="font-sans text-xl font-semibold">Home</span>
          </a>
          <a href="/about" className="flex flex-row  items-center gap-4">
            <span className="font-sans text-xl font-semibold">About</span>
          </a>
          <a href="/contact" className="flex flex-row  items-center gap-4">
            <span className="font-sans text-xl font-semibold">Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
}
