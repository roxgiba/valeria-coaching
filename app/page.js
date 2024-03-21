"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Image from "next/image";
import Coaching from "@/components/Coaching";
import Footer from "@/components/Footer";
import Servicios from "@/components/Servicios";

export default function Home() {
  return (
    <main id="/" className="sfondo min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center">
        <Image
          src="/girl_flying.avif"
          alt="woman standing openarms facing the sun"
          width={600}
          height={600}
          className="rounded-3xl shadow-lg transition-opacity opacity-0 duration-[1s] "
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
      <div>
        <p className="text-center font-bold text-3xl h-48">····</p>
      </div>
      <About />
      <Coaching />
      <Servicios />
      <Footer showLink1={true} showLink2={true} showLink3={true} />
    </main>
  );
}
