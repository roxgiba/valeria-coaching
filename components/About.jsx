import React from "react";

function About() {
  return (
    <div id="about" className="text-justify grid justify-items-stretch ">
      <h3 className="font-semibold text-gray-700 text-2xl lg:text-4xl pt-10 pb-8 justify-self-center">
        Sobre mí
      </h3>
      <div className="px-8 text-center text-gray-800 text-lg lg:px-52 tracking-wide ">
        <div className="leading-loose">
          <p>
            Soy Coach especializada en desarrollo personal y gestión emocional.
            Mi propósito es guiarte hacia el éxito personal, proporcionándote
            las herramientas necesarias para alcanzar tus metas. A lo largo de
            mi vida, he superado momentos de incertidumbre y desmotivación
            gracias al coaching. Con experiencia en diversas culturas, he vivido
            en ciudades como Bogotá, Roma, Madrid, Andorra y Barcelona.
          </p>

          <p>
            Anteriormente, me dediqué al mundo de la restauración, liderando
            equipos para comunicar el esfuerzo detrás de cada plato y botella de
            vino. Tras un golpe emocional, descubrí el coaching como una
            poderosa herramienta para conectar con mi esencia. Este proceso
            transformó mi vida, alineando mis valores y revelando mi verdadera
            vocación.
          </p>

          <p>
            Hoy, como coach, mi objetivo es ser tu guía para que te conviertas
            en tu mejor mentor y logres la felicidad. <br />{" "}
            <span className="font-semibold">
              ¡Estoy aquí para apoyarte en tu desarrollo personal y crecimiento
              emocional!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
