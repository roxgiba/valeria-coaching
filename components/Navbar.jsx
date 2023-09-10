import React from "react";
import Dropdown from "../components/Dropdown";

function Navbar() {
  return (
    <div className=" navbar leading-loose flex flex-col md:flex-row md:space-x-20 h-24 bg-gradient-to-r from-slate-200/50 via-slate-500/50 to-slate-200/50 relative z-10">
      <h1 className="text-black font-sans text-5xl py-5 px-6 md:px-36 tracking-widest">
        Coaching by <span className="italic text-6xl"> Valeria Topai </span>
      </h1>
      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        class="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none"
      >
        <a href="#about"></a>
        Sobre mi
      </button>
      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        class="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none"
      >
        Coaching
      </button>

      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        class="mr-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        Reserva tu primera sesión gratuita
      </button>

      <Dropdown />
    </div>
  );
}

export default Navbar;
