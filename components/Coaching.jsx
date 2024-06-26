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
      <div className="mt-20 md:flex md:items-center md:justify-center pb-10">
        <div className="flex items-center justify-between text-amber-700 place-items-center md:w-1/2 md:pl-5">
          <h1 className="font-bold text-4xl uppercase pb-5 pr-4 text-center">
            ¿En qué consiste un proceso de Coaching?
          </h1>
        </div>
        <div className="">
          <Image
            src="/whatiscoaching.jpeg"
            alt="drawing of 2 persons untangling the mess into a big head"
            width={600}
            height={600}
            className="bg-contain bg-center rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <div className="md:px-48  text-black text-center font-bold text-lg md:text-xl grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {renderCoachingItems()}
      </div>
      <div className="flex justify-center ">
        <div className="text-center mt-24 bg-orange-300 m-3 p-5 w-108 rounded-md ">
          <div>
            <p className="text-white text-3xl font-bold">
              Algunas preguntas que pueden orientarte hacia el próximo paso
            </p>
            <p className="text-black font-semibold">
              Si te identificas con al menos una... <br /> ¡No dudes en
              considerar un proceso de coaching!
            </p>
            <div className="text-white text-lg font-semibold">
              <p>¿Sientes estrés?</p>
              <p>¿Te encuentras perdido/a? </p>
              <p>¿Buscas un cambio pero no sabes por dónde empezar?</p>
              <p>¿Necesitas mejorar tus competencias o habilidades?</p>
              <p>¿Deseas emprender un nuevo proyecto?</p>
              <p>¿Quieres fortalecer tus relaciones interpersonales? </p>
              <p>¿Aspiras a elevar tu autoestima?</p>
              <p>¿Contemplas cambiar de trabajo?</p>
              <p>¿Sientes temor al dar el primer paso? </p>
              <p>¿Te encuentras en una situación que ya no toleras?</p>
              <p>¿Quisieras explorar tus capacidades al máximo?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coaching;
