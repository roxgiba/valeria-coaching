"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer({ showLink1, showLink2, showLink3 }) {
  const handleIconClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  let currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10 bg-gray-300 text-black rounded">
      <nav className="grid grid-flow-col gap-4">
        {showLink1 && (
          <a className="link link-hover" href="/sobremi">
            Sobre mí
          </a>
        )}
        {showLink2 && (
          <a
            className="link link-hover"
            href="#coaching"
            onClick={(e) => handleClick(e, "coaching")}
          >
            Coaching
          </a>
        )}
        {showLink3 && (
          <a
            className="link link-hover"
            href="#servicios"
            onClick={(e) => handleClick(e, "servicios")}
          >
            Servicios
          </a>
        )}
        <a
          //  href="https://calendly.com/topaicoach/30min"
          href="/contactForm"
          className="link link-hover"
        >
          Sesión gratuita
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <Link href="https://www.linkedin.com/in/valeria-topai-poveda-3b2b7697/">
              <Image
                src="/logo-linkedin.png"
                alt="logo Linkedin"
                width={30}
                height={30}
                className="rounded-full"
              />
            </Link>
          </a>
          <a>
            <Link href="https://www.escuelacoaching.com/">
              <Image
                src="/logo-coaching.jpeg"
                alt="logo escuela europea de coaching"
                width={30}
                height={30}
                className="rounded-full"
              />
            </Link>
          </a>
          <a>
            <Link href="https://coachingfederation.org/">
              <Image
                src="/logo-coaching2.jpeg"
                alt="logo international coaching federation"
                width={30}
                height={30}
                className="rounded-full"
              />
            </Link>
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {currentYear} - All right reserved by Valeria Topai</p>
        <Image
          src="/icon.png"
          alt="colibri"
          width={50}
          height={50}
          className="cursor-pointer"
          onClick={handleIconClick}
        />
      </aside>
    </footer>
  );
}

export default Footer;
