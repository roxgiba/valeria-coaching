import React from "react";

function Coaching() {
  return (
    <div className="">
      <div className=" tracking-wide font-sans pt-32 sm:pt-36 lg:pt-6 text-justify grid justify-items-stretch">
        <h1 className="font-bold text-amber-700 text-2xl  lg:pt-20 pb-20 justify-self-center italic">
          Coaching
        </h1>
      </div>

      <div className="px-72 text-white text-center text-xl  grid justify-items-center">
        <div className="bg-rose-300	   rounded-md place-self-start box-border w-96 p-10 border-4">
          Se trata de un proceso de autodescubrimiento que te ayudará a conectar
          con tus objetivos y tu compromiso para alcanzarlos.
        </div>
        <div className="bg-rose-300	 box-border w-96 p-10 border-4 rounded-md place-self-end">
          El proceso consiste en varias sesiones de una hora aproximadamente
          cada una, (normalmente un mínimo de 5) en las cuales el coach te va a
          acompañar, con preguntas, feedbacks y en ocasiones ejercicios, hacia
          ese lugar donde quieres estar.
        </div>
        <div className="bg-rose-300	 box-border w-96 p-10 border-4 rounded-md place-self-start">
          Sea cual sea tu meta, un proceso de Coaching te ayudará a descubrir
          que necesitas incorporar y que necesitas soltar para conseguir lo que
          quieres.{" "}
        </div>
        <div className="bg-rose-300	 box-border w-96 p-10 border-4 rounded-md place-self-end">
          Mi misión como coach es acompañarte en este proceso para que te
          conviertas en tu mejor maestro para alcanzar tu propio éxito!
        </div>
      </div>
    </div>
  );
}

export default Coaching;
