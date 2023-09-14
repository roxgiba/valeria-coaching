import React from "react";
import Head from "next/head";

const Reserva = () => {
  return (
    <div id="reserva">
      <Head>
        <title>My Appointment Calendar</title>
      </Head>

      <h1>Welcome to My Appointment Calendar</h1>

      {/* Embed Google Calendar */}
      <iframe
        src="https://calendar.google.com/calendar/embed?src=rox.giba%40gmail.com&ctz=Europe%2FMadrid"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>

      <p>
        Click{" "}
        <a
          href="https://calendar.google.com/calendar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{" "}
        to view the calendar in a new tab.
      </p>

      {/* Add a Book Appointment CTA */}
      <a href="https://calendar.google.com/calendar/">Book an Appointment</a>
    </div>
  );
};

export default Reserva;
