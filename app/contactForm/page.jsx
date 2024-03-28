"use client";

import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const ContactForm = () => {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  //  const [stateMessage, setStateMessage] = useState(null);

  // const service_id = process.env.YOUR_SERVICE_ID;
  // const template_id = process.env.YOUR_TEMPLATE_ID;
  // const public_id = process.env.YOUR_PUBLIC_KEY;

  const service_id = "service_xtqinmh";
  const template_id = "template_escdw2i";
  const public_id = "3eEXggHjwJT-Xu0KE";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_id,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(service_id, template_id, form.current, {
  //       publicKey: public_id,
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  //   e.target.reset();
  // };

  // const sendEmail = (e) => {
  //   e.persist();
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   emailjs
  //     .sendForm(
  //       process.env.YOUR_SERVICE_ID,
  //       process.env.YOUR_TEMPLATE_ID,
  //       e.target,
  //       process.env.YOUR_PUBLIC_KEY
  //     )
  //     .then(
  //       (result) => {
  //         setStateMessage("Message sent!");
  //         setIsSubmitting(false);
  //         setTimeout(() => {
  //           setStateMessage(null);
  //         }, 5000); // hide message after 5 seconds
  //       },
  //       (error) => {
  //         setStateMessage("Something went wrong, please try again later");
  //         setIsSubmitting(false);
  //         setTimeout(() => {
  //           setStateMessage(null);
  //         }, 5000); // hide message after 5 seconds
  //       }
  //     );

  //   // Clears the form after sending the email
  //   e.target.reset();
  // };

  return (
    <div className="sfondo min-h-screen">
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

      <form onSubmit={sendEmail} className="flex justify-center ">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 p-8 bg-sky-200/80 rounded-md shadow-md my-10">
          <div className="sm:col-span-4">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nombre
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  autoComplete="user_name"
                  className="block flex-1 rounded-md border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Tu nombre"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              E-mail
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Tu correo electronico"
                  className="block flex-1 rounded-md border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6  text-gray-900 "
            >
              Mensaje
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows={3}
                className="block w-full rounded-md border-0 indent-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                placeholder="Escribe aqui tu pregunta..."
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600"></p>
            <input
              type="submit"
              value="Envia"
              //    disabled={isSubmitting}
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            />
            {/* {stateMessage && <p>{stateMessage}</p>} */}
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default ContactForm;
