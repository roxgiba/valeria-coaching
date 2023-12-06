import React from "react";

function About() {
  return (
    <div id="about" className="text-justify grid justify-items-stretch ">
      <h3 className="font-semibold text-amber-700 text-2xl lg:text-4xl pt-10 pb-8 justify-self-center italic">
        Sobre mí
      </h3>
      <div className="px-8 text-center text-lg lg:px-52 tracking-wide ">
        <p className="leading-loose">
          Soy Coach especializada en desarrollo personal y gestión emocional,
          dedicada a guiar a las personas hacia el éxito personal. <br /> Mi
          propósito fundamental es acompañar a individuos en la búsqueda de su
          camino hacia el éxito, brindando las herramientas necesarias para
          alcanzar sus metas. A lo largo de mi vida, he experimentado momentos
          de incertidumbre, estancamiento y desmotivación, sintiendo la falta de
          dirección. Sin embargo, el coaching se ha convertido en mi aliado,
          permitiéndome superar esos obstáculos y vivir de manera consciente
          cada paso que doy. Mi crecimiento se ha nutrido en diversas culturas y
          he tenido el privilegio de vivir en ciudades como Bogotá, Roma,
          Madrid, Andorra y actualmente Barcelona. <br /> Anteriormente, dediqué
          una parte significativa de mi vida al mundo de la restauración,
          desempeñando roles destacados como maitre y sommelier en reconocidos
          restaurantes. Mi principal enfoque era capacitar a mis equipos para
          comunicar el esfuerzo detrás de cada plato y cada botella de vino.
          Después de liderar equipos durante años, comprendí la importancia del
          bienestar individual: cuanto mejor te llevas contigo mismo, mejores
          relaciones estableces con el mundo que te rodea. <br /> Tras enfrentar
          un golpe emocional significativo a nivel personal, reflexioné sobre la
          <span className="italic tracking-wide font-bold">
            {" "}
            verdadera felicidad
          </span>{" "}
          en mi vida. Esta introspección me llevó a descubrir el mundo del
          coaching, una
          <span className="italic tracking-wide font-bold">
            {" "}
            herramienta poderosa y efectiva para conectar con la esencia
            personal y trazar un camino propio
          </span>
          . Inicié un proceso de autodescubrimiento que transformó completamente
          mi vida y me conectó con mi verdadera vocación, alineando mis valores
          de manera coherente. <br /> Hoy, como coach, mi objetivo es ser tu
          guía para que te conviertas en tu mejor mentor y logres alcanzar
          aquello que realmente te hace feliz. ¡Estoy aquí para apoyarte en tu
          viaje de desarrollo personal y crecimiento emocional!
        </p>
      </div>
    </div>
  );
}

export default About;
