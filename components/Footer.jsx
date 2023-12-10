import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const handleIconClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="/#about">
          Sobre mí
        </a>
        <a className="link link-hover" href="#coaching">
          Coaching
        </a>
        <a className="link link-hover" href="#servicios">
          Servicios
        </a>
        <a href="https://calendly.com/rox-giba" className="link link-hover">
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
        <p>Copyright © 2023 - All right reserved by Valeria Topai</p>
        <Image
          src="/icon.png"
          alt="colibri"
          width={50}
          height={50}
          className=""
          onClick={handleIconClick}
        />
      </aside>
    </footer>
  );
}

export default Footer;
