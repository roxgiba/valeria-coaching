import React from "react";
import Image from "next/image";

export default function Servicios() {
  return (
    <div className="pb-20">
      <h1
        id="servicios"
        className="text-xl font-semibold md:text-4xl md:font-semibold text-center text-gray-700 p-20"
      >
        Servicios
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center justify-items-center content-around">
        {/* image 1 */}
        <div class="group h-52 w-80 perspective-1000p">
          <div class="relative h-52 w-80 rounded-xl  transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div class="absolute inset-0">
              <div className="flex justify-center relative">
                <Image
                  src="/sunset.avif"
                  alt="sunset"
                  width={300}
                  height={300}
                  className="rounded-xl"
                />
                <div class="absolute inset-0 rounded-md"></div>
                <div class="absolute inset-0 flex items-end justify-center">
                  <h2 class="text-white text-3xl font-bold pb-5">5 Sesiones</h2>
                </div>
              </div>
            </div>
            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="flex min-h-full flex-col items-center justify-center">
                <h1 class="text-3xl font-bold">249 €</h1>
                <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                  <a href="https://calendly.com/rox-giba">Reserva</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* image 2 */}
        <div class="group h-52 w-80 [perspective:1000px]">
          <div class="relative h-52 w-80 rounded-xl  transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div class="absolute inset-0">
              <div className="flex justify-center relative">
                <Image
                  src="/beach.avif"
                  alt="beach"
                  width={300}
                  height={300}
                  className="rounded-xl"
                />
                <div class="absolute inset-0 rounded-md"></div>
                <div class="absolute inset-0 flex items-end justify-center">
                  <h2 class="text-white text-3xl font-bold pb-5">8 Sesiones</h2>
                </div>
              </div>
            </div>
            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="flex min-h-full flex-col items-center justify-center">
                <h1 class="text-3xl font-bold">375 €</h1>
                <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                  <a href="https://calendly.com/rox-giba">Reserva</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* image 3 */}
        <div class="group h-56 w-80 [perspective:1000px]">
          <div class="relative h-56 w-80 rounded-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div class="absolute inset-0">
              <div className="flex justify-center relative">
                <Image
                  src="/sand.avif"
                  alt="desert"
                  width={300}
                  height={300}
                  className="rounded-xl"
                />
                <div class="absolute inset-0 rounded-md"></div>
                <div class="absolute inset-0 flex items-end justify-center">
                  <h2 class="text-white text-3xl font-bold pb-5">
                    10 Sesiones
                  </h2>
                </div>
              </div>
            </div>
            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="flex min-h-full flex-col items-center justify-center">
                <h1 class="text-3xl font-bold">450 €</h1>
                <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                  <a href="https://calendly.com/rox-giba">Reserva</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
