"use client";
import React, { useState } from "react";
import Image from "next/image";

function Coaching() {
  const [hoverItem, setHoverItem] = useState(null);

  const coachingItems = [
    {
      color: "bg-orange-300",
      text: "Se trata de un proceso de autodescubrimiento que te ayudará a conectar con tus objetivos y tu compromiso para alcanzarlos.",
    },
    {
      color: "bg-orange-300",
      text: "El proceso consiste en varias sesiones de una hora aproximadamente cada una, (normalmente un mínimo de 5) en las cuales el coach te va a acompañar, con preguntas, feedbacks y en ocasiones ejercicios, hacia ese lugar donde quieres estar.",
    },
    {
      color: "bg-orange-300",
      text: "Sea cual sea tu meta, un proceso de Coaching te ayudará a descubrir que necesitas incorporar y que necesitas soltar para conseguir lo que quieres.",
    },
    {
      color: "bg-orange-300",
      text: "Mi misión como coach es acompañarte en este proceso para que te conviertas en tu mejor maestro para alcanzar tu propio éxito!",
    },
  ];

  const handleItemHover = (index) => {
    setHoverItem(index);
  };

  const renderCoachingItems = () => {
    return coachingItems.map((item, index) => (
      <div
        key={index}
        className={`box-border w-64 lg:w-96 p-10 m-5 rounded-md shadow-2xl ${
          item.color
        } ${index % 2 === 0} ? "place-self-start" : "place-self-end" ${
          hoverItem === index
            ? "bg-orange-200 transform scale-110 transition-transform"
            : ""
        }`}
        onMouseEnter={() => handleItemHover(index)}
        onMouseLeave={() => handleItemHover(null)}
      >
        {item.text}
      </div>
    ));
  };

  return (
    <div id="coaching">
      <div className="md:flex md:items-center md:justify-center p-10">
        <div className="flex items-center justify-between text-amber-700 place-items-center md:w-1/2 md:pl-5">
          <h1 className="font-bold text-4xl uppercase pb-5 text-center">
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

      <div className="lg:px-72 text-black text-center font-bold text-lg lg:text-xl grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
        {renderCoachingItems()}
      </div>
      <div className="text-center mt-24">
        <div>
          <h1 className="text-amber-700 text-2xl">
            Algunas preguntas que te pueden ayudar a dar el siguiente paso. Si
            te sientes identificado al menos con una..No lo dudes porque un
            proceso de coaching te puede ayudar!
          </h1>
          <p>¿Te sientes estresada/o?</p>
          <p>¿Te sientes perdida/o? </p>
          <p>¿Necesitas un cambio y no sabes por donde empezar?</p>
          <p>
            ¿Necesitas mejorar una o varias de tus competencias / habilidades?
          </p>
          <p>¿Quieres emprender un nuevo proyecto? </p>
          <p>¿Quieres mejorar la relación con alguien? </p>
          <p>¿Quieres mejorar mi autoestima? </p>
          <p>¿Quieres cambiar de trabajo?</p>
          <p>¿Tienes miedo de dar el primer paso? </p>
          <p>¿Te encuentras en una situación que no toleras más?</p>
          <p>¿Quiero explorar de qué eres capaz?</p>
        </div>
      </div>
    </div>
  );
}

export default Coaching;
