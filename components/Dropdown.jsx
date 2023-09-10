"use client";

import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-block align-baseline text-black font-sans text-7xl w-36"
      >
        ≡
      </button>

      {isOpen && (
        <div className="bg-white/70 absolute top-24 flex flex-col rounded-lg p-2 text-xl leading-loose">
          <h3 className="pl-4 rounded-r-lg border-l-transparent hover:bg-slate-100 hover:border-l-white border-l-4">
            Inicio
          </h3>
          <h3 className="pl-4 rounded-r-lg border-l-transparent hover:bg-slate-100 hover:border-l-white border-l-4">
            Sobre mí
          </h3>
          <h3 className="pl-4 rounded-r-lg border-l-transparent hover:bg-slate-100 hover:border-l-white border-l-4">
            ¿En qué consiste el Coaching?
          </h3>
          <h3 className="pl-4 rounded-r-lg border-l-transparent hover:bg-slate-100 hover:border-l-white border-l-4">
            Servicios
          </h3>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
