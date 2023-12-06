import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Image from "next/image";
import Coaching from "@/components/Coaching";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="sfondo" className="min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center ">
        <Image
          src="/girl_flying.avif"
          alt="sofa image"
          width={600}
          height={600}
          className="object-cover object-center self-auto"
        />
      </div>
      <About />
      <Coaching />
      <Footer />
    </main>
  );
}
