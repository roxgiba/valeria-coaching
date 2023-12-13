import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function SobreMiPage() {
  return (
    <div className="sfondo min-h-screen">
      <div>
        <Link href="/">
          <Image
            src="/icon.png"
            alt="colibri"
            href="/"
            width={50}
            height={50}
            className="pt-8 ml-8"
          />
        </Link>
      </div>

      <h3 className="font-semibold text-gray-700 text-2xl lg:text-4xl lg:py-10 text-center">
        Sobre mí
      </h3>
      <div className=" text-center text-gray-800 text-lg lg:px-52 tracking-wide ">
        <div className="leading-loose">
          <p>
            Trabajo como Coach especializada en desarrollo personal y gestión
            emocional.
          </p>
          <p>
            Mi propósito, es acompañar a las personas a encontrar el camino
            hacia el propio éxito.
          </p>
          <p>
            A lo largo de mi vida, yo también he experimentado momentos de
            incertidumbre, estancamiento y desmotivación, viviendo la sensación
            de no tener rumbo.
          </p>
          <p>
            Gracias al coaching he podido superarlos y a día de hoy vivo con
            consciencia cada paso que doy.{" "}
          </p>
          <p>
            He crecido en diferentes culturas y he tenido el privilegio de vivir
            en Bogotá, Roma, Madrid, Andorra y ahora Barcelona.
          </p>
          <p>
            Dediqué una gran parte de mi vida al mundo de la restauración,
            desempeñando roles de maitre y sommelier en restaurantes de gran
            prestigio. Mi principal objetivo era capacitar a mis equipos para
            comunicar el esfuerzo que hay detrás de cada plato y cada botella de
            vino. Tras años liderando equipos, comprendí la importancia del
            bienestar individual: cuanto mejor te llevas contigo mismo, mejores
            relaciones estableces con el mundo que te rodea.
          </p>
          <p>
            Después de un golpe emocional significativo a nivel personal, me di
            cuenta que algo faltaba en mi vida. Decidí detenerme y cuestionarme
            si realmente era feliz con lo que hacía. La respuesta fue un rotundo
            NO. Ese momento de incertidumbre me llevó a descubrir el mundo del
            coaching, una herramienta poderosa y realmente eficaz para conectar
            con tu esencia y trazar tu propio camino.
          </p>
          <p>
            Inicié un proceso de autodescubrimiento que transformó por completo
            mi vida, me conectó con mi verdadera vocación y me ayudó a alinear
            mis valores.
          </p>
          <p className="font-semibold">
            Hoy, como coach, mi objetivo es acompañarte para que te conviertas
            en tu mejor maestro y consigas lo que te hace feliz!
          </p>
          <p></p>
        </div>
      </div>
      <Footer showLink1={false} />
    </div>
  );
}
