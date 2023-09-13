import React from "react";

function Coaching() {
  return (
    <div className="">
      <div className=" tracking-wide font-sans pt-32 sm:pt-36 lg:pt-6 text-justify grid justify-items-stretch">
        <h1 className="font-bold text-amber-700 text-2xl lg:text-4xl text-center m-5 lg:pt-20 pb-20 justify-self-center italic">
          ¿En qué consiste un proceso de Coaching?
        </h1>
      </div>

      <div className=" lg:px-72 text-white text-center text-lg lg:text-xl  grid justify-items-center">
        <div className="bg-rose-300	   rounded-md place-self-start box-border w-64 lg:w-96 p-10 m-5 border-4 shadow-2xl border-double">
          Se trata de un proceso de autodescubrimiento que te ayudará a conectar
          con tus objetivos y tu compromiso para alcanzarlos.
        </div>
        <div className="bg-rose-300	 box-border w-72 lg:w-96 p-10 m-5 border-4 rounded-md place-self-end shadow-2xl border-double ">
          El proceso consiste en varias sesiones de una hora aproximadamente
          cada una, (normalmente un mínimo de 5) en las cuales el coach te va a
          acompañar, con preguntas, feedbacks y en ocasiones ejercicios, hacia
          ese lugar donde quieres estar.
        </div>
        <div className="bg-rose-300	 box-border w-64 lg:w-96 p-10 m-5 border-4 rounded-md place-self-start shadow-2xl border-double ">
          Sea cual sea tu meta, un proceso de Coaching te ayudará a descubrir
          que necesitas incorporar y que necesitas soltar para conseguir lo que
          quieres.{" "}
        </div>
        <div className="bg-rose-300	 box-border w-60 lg:w-96 p-10 border-4  m-5 rounded-md place-self-end shadow-2xl border-double">
          Mi misión como coach es acompañarte en este proceso para que te
          conviertas en tu mejor maestro para alcanzar tu propio éxito!
        </div>
      </div>
    </div>
  );
}

export default Coaching;
