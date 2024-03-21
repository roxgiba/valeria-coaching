"use client";

import Image from "next/image";

const Navbar = () => {
  const handleIconClick = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar bg-base-400 h-18 md:h-32 text-gray-700">
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
              <a href="/sobremi">Sobre mí</a>
            </li>
            <li>
              <a
                href="#coaching"
                onClick={(e) => handleIconClick(e, "coaching")}
              >
                Coaching
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                onClick={(e) => handleIconClick(e, "servicios")}
              >
                Servicios
              </a>
            </li>
            <li className="lg:hidden">
              {/* <a href="https://calendly.com/topaicoach/30min">
                Sesión gratuita
              </a> */}
              <a href="/contactForm">Sesión gratuita</a>
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
        <a
          href="https://calendly.com/topaicoach/30min"
          className="btn btn-ghost md:btn-md lg:btn-lg hidden lg:inline-block pt-5"
        >
          Reserva tu primera sesión gratuita
        </a>
      </div>
    </div>
  );
};

export default Navbar;
