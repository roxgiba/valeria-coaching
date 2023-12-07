import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="pb-20">
      <h1
        id="servicios"
        className="text-xl font-semibold md:text-4xl md:font-semibold text-center text-gray-700 p-20"
      >
        Servicios
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center ">
        <div className="flex justify-center relative">
          <Image
            src="/sunset.avif"
            alt="sanset"
            width={300}
            height={300}
            className="rounded-xl"
          />
          <div class="absolute inset-0 rounded-md"></div>
          <div class="absolute inset-0 flex items-end justify-center">
            <h2 class="text-white text-3xl font-bold pb-5">5 Sesiones</h2>
          </div>
        </div>
        <div className="flex justify-center relative">
          <Image
            src="/beach.avif"
            alt="sanset"
            width={300}
            height={300}
            className="rounded-xl"
          />

          <div class="absolute inset-0 rounded-md"></div>
          <div class="absolute inset-0 flex items-end justify-center">
            <h2 class="text-white text-3xl font-bold pb-5">10 Sesiones</h2>
          </div>
        </div>
        <div className="flex justify-center relative">
          <Image
            src="/sand.avif"
            alt="sanset"
            width={300}
            height={300}
            className="rounded-xl"
          />

          <div class="absolute inset-0 rounded-md"></div>
          <div class="absolute inset-0 flex items-end justify-center">
            <h2 class="text-white text-3xl font-bold pb-5">15 Sesiones</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
