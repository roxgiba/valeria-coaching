import React from "react";
import Dropdown from "../components/Dropdown";

function Navbar() {
  return (
    <div className=" flex flex-col md:flex-row md:space-x-96 h-24 bg-gradient-to-r from-slate-200/50 via-slate-500/50 to-slate-200/50 relative z-10">
      <h1 className="text-black font-sans text-4xl py-5 px-6 md:px-36 tracking-widest">
        Coaching by <span className="italic"> Valeria Topai </span>
      </h1>
      <Dropdown />
    </div>
  );
}

export default Navbar;
