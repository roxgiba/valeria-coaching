"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";

function DropdownMenuNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown ">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="lg:inline-block align-baseline text-black font-sans w-36 sm:text-3xl lg:text-7xl pl-2 hidden"
      >
        ≡
      </button>

      {isOpen && (
        <div className="bg-white/70 absolute top-24 flex flex-col rounded-lg p-2 sm:text-base lg:text-xl leading-loose">
          <button className="pl-4 pb-1 rounded-r-lg border-l-transparent hover:bg-slate-100 hover:border-l-white border-l-4">
            Inicio
          </button>
          <Link href="/#about">
            <button className="pl-4 pb-1 rounded-r-lg border-l-transparent hover:bg-slate-100 hover:border-l-white border-l-4">
              Sobre mí
            </button>
          </Link>
          <Link href="/#coaching">
            <button className="pl-4 pb-1 rounded-r-lg border-l-transparent hover:bg-slate-100 hover:border-l-white border-l-4">
              ¿En qué consiste el Coaching?
            </button>
          </Link>
          <button className="pl-4  pb-1 rounded-r-lg border-l-transparent hover:bg-slate-100 hover:border-l-white border-l-4">
            Servicios
          </button>
        </div>
      )}
    </div>
  );
}

export default DropdownMenuNav;
