import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-rose-50 min-h-screen">
      <Navbar />
      <div className="grid justify-items-center">
        <Image
          src="/sofa.jpg"
          alt="sofa image"
          width={800}
          height={800}
          className="object-top"
        />
      </div>

      {/* Mobile navigation */}
    </main>
  );
}
