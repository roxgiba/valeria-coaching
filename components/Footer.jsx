import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-evenly md:items-center sm:px-12 px-4 bg-slate-700 py-7">
        <div className="flex justify-start space-x-4 me-3 pb-8 lg:pb-5 ">
          <Link href="https://www.linkedin.com/in/valeria-topai-poveda-3b2b7697/">
            <Image
              src="/logo-linkedin.png"
              alt="logo Linkedin"
              width={30}
              height={30}
              className="rounded-full"
            />
          </Link>
          <Link href="https://www.escuelacoaching.com/">
            <Image
              src="/logo-coaching.jpeg"
              alt="logo escuela europea de coaching"
              width={30}
              height={30}
              className="rounded-full"
            />
          </Link>

          <Link href="https://coachingfederation.org/">
            <Image
              src="/logo-coaching2.jpeg"
              alt="logo international coaching federation"
              width={30}
              height={30}
              className="rounded-full"
            />
          </Link>
        </div>
        <h1
          className="p-2 lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-medium  text-center
     md:w-2/5"
        >
          ¡Hablemos!
        </h1>
        <Link href="https://calendly.com/rox-giba">
          <button
            className="bg-white hover:bg-blue-500 duration-300 py-2 px-4 lg:px-6 lg:py-2 font-medium uppercase
       rounded-md text-black hover:text-white md:w-auto w-full"
          >
            Reserva tu primera sesión gratuita
          </button>
        </Link>
      </div>
      <div className="justify-center text-center pt-3 text-gray-400 text-sm pb-8">
        <span>© 2023 Valeria Topai. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;

/*





*/
