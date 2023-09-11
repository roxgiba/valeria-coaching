import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-rose-50 min-h-screen">
      <nav>
        <div className="grid justify-items-center z-0">
          <Image
            src="/sofa.jpg"
            alt="sofa image"
            width={600}
            height={600}
            className="object-top w-full sm:w-2/3 lg:w-1/2 absolute"
          />
        </div>
        <Navbar />
      </nav>
      <About />
    </main>
  );
}
