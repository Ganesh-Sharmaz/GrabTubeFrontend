import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="text-white p-4 bg-[#141414] px-20  select-none flex justify-between">
      <div className="flex text-3xl items-center gap-1 font-bold">
        <img className="h-12" src="/download.png" alt="" />
        <h1 className="text-5xl font-semibold"> GrabTube</h1>
      </div>
      <Link
        to="/about"
        className="text-lg flex items-center justify-center hover:text-blue-500 transition-colors"
      >
        <p>About</p>
      </Link>
    </header>
  );
}

export default Header;
