"use client";

import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className=" inline-block align-baselinetext-black font-sans text-7xl w-36"
      >
        ≡
      </button>

      {isOpen && (
        <div className="bg-white/70 absolute top-24 flex flex-col items-start rounded-lg p-2 text-xl leading-loose">
          <h3>About me</h3>
          <h3>Coaching</h3>
          <h3>Contact me</h3>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
