"use client";

import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar bg-base-400 h-32 text-gray-700">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white/30 rounded-box w-52"
          >
            <li>
              <a>Sobre mí</a>
            </li>
            <li>
              <a>Coaching</a>
            </li>
            <li>
              <a>Servicios</a>
            </li>
            <li className="lg:hidden">
              <a>Session gratuita</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Image
          src="/icon.png"
          alt="colibri"
          width={50}
          height={50}
          className=""
        />
        <a className="font-semibold text-md lg:text-3xl">
          Coaching by <span className="italic">Valeria Topai</span>
        </a>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost md:btn-md lg:btn-lg hidden lg:inline-block "
          href="https://calendly.com/rox-giba"
        >
          Reserva tu primera sesión gratuita
        </button>
      </div>
    </div>
  );
};

export default Navbar;
