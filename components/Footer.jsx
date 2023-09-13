import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* <div>
        <Image
          src="/logo-coaching.jpeg"
          alt="logo escuela europea de coaching"
          width={50}
          height={50}
          className=""
        />
        <Image
          src="/logo-coaching2.jpeg"
          alt="logo international coaching federation"
          width={50}
          height={50}
          className=""
        />
      </div> */}
      <div className="md:flex md:justify-evenly md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
     md:w-2/5"
        >
          ¡Hablemos!
        </h1>
        <div>
          <button
            className="bg-rose-400 hover:bg-blue-500 duration-300 px-5 py-2.5 font-[Poppins]
       rounded-md text-white md:w-auto w-full"
          >
            Reserva tu primera sesión gratuita
          </button>
        </div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
  text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span> </span>

        <span>© 2023 Valeria Topai. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
