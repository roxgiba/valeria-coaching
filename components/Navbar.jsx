"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

//import NavLogo from "../public/assets/kenlogo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-slate-300/50 border-b border-gray-300 py-2">
        <div className="flex justify-between items-center  px-[8%] flex-wrap">
          <p className="text-black font-sans text-2xl sm:text-2xl lg:text-3xl ">
            Coaching by{" "}
            <span className="italic text-3xl sm:text-3xl lg:text-4xl">
              Valeria Topai
            </span>
          </p>
          <FiMenu
            className="lg:hidden block h-6 w-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <nav
            className={`${
              open ? "block" : "hidden"
            } lg:flex lg:items-center lg:w-auto w-full`}
          >
            <ul className="text-base text-gray-600 lg:flex lg:justify-between">
              <li className="lg:px-5 py-2 hover:text-blue-500 hover:bg-white hover:rounded-md  font-semibold">
                <Link href="/">Inicio</Link>
              </li>
              <li className="lg:px-5 py-2 hover:text-blue-500 hover:bg-white hover:rounded-md font-semibold">
                <Link href="/#about">Sobre mi</Link>
              </li>
              <li className="lg:px-5 py-2 hover:text-blue-500 hover:bg-white hover:rounded-md  font-semibold">
                <Link href="/#coaching">Coaching</Link>
              </li>
              <li
                className="bg-white hover:bg-blue-500 duration-300 px-5 py-2.5 font-medium uppercase
       rounded-md text-black hover:text-white md:w-auto w-full text-center"
              >
                <Link href="/">Reserva tu primera sesión gratuita</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
