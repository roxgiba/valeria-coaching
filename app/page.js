"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Image from "next/image";
import Coaching from "@/components/Coaching";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Services from "@/components/Services";
import Servicios from "@/components/Servicios";

export default function Home() {
  return (
    <main id="sfondo" className="min-h-screen">
      <Navbar />

      <div className="flex items-center justify-center">
        <Image
          src="/girl_flying.avif"
          alt="woman standing openarms facing the sun"
          width={600}
          height={600}
          className="object-cover object-center self-auto transition-opacity opacity-0 duration-[1s] lg:py-12 my-10 lm:my-20"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>

      <About />
      <Coaching />
      <Servicios />
      <Footer />
    </main>
  );
}
