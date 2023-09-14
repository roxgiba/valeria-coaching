"use client";

// import React from "react";
// import DropdownMenuNav from "@/components/DropdownMenuNav";
// import { Link } from "@nextui-org/react";

// function Navbar() {
//   return (
//     <div className=" leading-loose flex justify-between flex-col md:flex-row md:space-x-20 h-24 bg-gradient-to-r from-slate-200/50 via-slate-500/50 to-slate-200/50 relative z-10">
//       <p className="text-black font-sans text-2xl sm:text-3xl lg:text-5xl py-5 px-6 md:px-36 tracking-widest leading-loose ">
//         Coaching by{" "}
//         <span className="italic text-2xl sm:text-3xl lg:text-6xl">
//           {" "}
//           Valeria Topai{" "}
//         </span>
//       </p>
//       <Link href="/#about">
//         <button
//           type="button"
//           data-te-ripple-init
//           data-te-ripple-color="light"
//           className=" mr-3 inline-block rounded mt-48 lg:mt-1 pt-5 px-6 pb-2 text-md font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none sm:pt-44 lg:pt-2.5"
//         >
//           Sobre mi
//         </button>{" "}
//       </Link>

//       <Link href="/#coaching">
//         <button
//           type="button"
//           data-te-ripple-init
//           data-te-ripple-color="light"
//           className="mr-3 inline-block rounded px-6 pb-2 pt-5 text-md font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none"
//         >
//           Coaching
//         </button>
//       </Link>

//       <button
//         type="button"
//         data-te-ripple-init
//         data-te-ripple-color="light"
//         className="bg-white mr-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-500 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//       >
//         Reserva tu primera sesión gratuita
//       </button>

//       <DropdownMenuNav />
//     </div>
//   );
// }

// export default Navbar;

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

//import NavLogo from "../public/assets/kenlogo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-slate-500/50 border-b border-gray-300 py-2">
        <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap">
          <p className="text-black font-sans text-xl sm:text-2xl lg:text-2xl ">
            Coaching by{" "}
            <span className="italic text-xl sm:text-3xl lg:text-3xl">
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
              <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                <Link href="/">Inicio</Link>
              </li>
              <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                <Link href="/about">Sobre mi</Link>
              </li>
              <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                <Link href="/register">Coaching</Link>
              </li>
              <li className="py-2 px-4 lg:px-6 lg:py-2 bg-blue-700 text-white rounded-xl font-semibold">
                <Link href="/login">Reserva tu primera sesión gratuita</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
