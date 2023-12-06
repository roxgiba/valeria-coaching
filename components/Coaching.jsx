import React from "react";
import Image from "next/image";

function Coaching() {
  return (
    <div id="coaching">
      <div className="md:flex md:items-center md:justify-center p-10">
        <div className="flex items-center justify-between text-amber-700 place-items-center md:w-1/2 md:pl-5">
          <h1 className="font-bold text-2xl md:text-4xl uppercase pb-5 text-center">
            ¿En qué consiste un proceso de Coaching?
          </h1>
        </div>
        <div className="">
          <Image
            src="/whatiscoaching.jpeg"
            alt="drawing of 2 persons untangling the mess into a big head"
            width={600}
            height={600}
            className="bg-contain bg-center"
          />
        </div>
      </div>

      <div className=" lg:px-72  text-black text-center text-lg lg:text-2xl  grid justify-items-center">
        <div className=" bg-red-100 rounded-md place-self-start box-border w-64 lg:w-96 p-10 m-5 border-4 border-yellow-100/100 shadow-2xl ">
          Se trata de un proceso de autodescubrimiento que te ayudará a conectar
          con tus objetivos y tu compromiso para alcanzarlos.
        </div>
        <div
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          className="bg-red-100 box-border w-72 lg:w-96 p-10 m-5 rounded-md place-self-end shadow-2xl border-4 border-blue-400/100 "
        >
          El proceso consiste en varias sesiones de una hora aproximadamente
          cada una, (normalmente un mínimo de 5) en las cuales el coach te va a
          acompañar, con preguntas, feedbacks y en ocasiones ejercicios, hacia
          ese lugar donde quieres estar.
        </div>
        <div className="bg-red-100 box-border w-64 lg:w-96 p-10 m-5 border-4 border-purple-400/100 rounded-md place-self-start shadow-2xl ">
          Sea cual sea tu meta, un proceso de Coaching te ayudará a descubrir
          que necesitas incorporar y que necesitas soltar para conseguir lo que
          quieres.{" "}
        </div>
        <div className="bg-red-100 box-border w-60 lg:w-96 p-10 border-4 border-green-700/100 m-5 rounded-md place-self-end shadow-2xl ">
          Mi misión como coach es acompañarte en este proceso para que te
          conviertas en tu mejor maestro para alcanzar tu propio éxito!
        </div>
      </div>
      <div>
        <p>
          Algunas preguntas que te pueden ayudar a dar el siguiente paso. Si te
          sientes identificado al menos con una..No lo dudes porque un proceso
          de coaching te puede ayudar! ¿Te sientes estresada/o? ¿Te sientes
          perdida/o? ¿Necesitas un cambio y no sabes por donde empezar?
          ¿Necesitas mejorar una o varias de tus competencias / habilidades?
          ¿Quieres emprender un nuevo proyecto? ¿Quieres mejorar la relación con
          alguien? ¿Quieres mejorar mi autoestima? ¿Quieres cambiar de trabajo?
          ¿Tienes miedo de dar el primer paso? ¿Te encuentras en una situación
          que no toleras más? ¿Quiero explorar de qué eres capaz?
        </p>
      </div>
    </div>
  );
}

export default Coaching;
