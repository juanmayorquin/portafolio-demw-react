import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="h-screen grid grid-cols-2 justify-center pb-20 items-end m-auto px-16 bg-gray-900 text-white">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <p className="text-2xl">Hola,</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Soy <span className="text-purple-600">Juan </span>
            <br />
            <span>
              <Typewriter
                words={[
                  "Desarrollador Web",
                  "Diseñador UI/UX",
                  "Ingeniero Multimedia",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={30}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p>
            Desarrollador web front-end con experiencia en crear experiencias
            digitales atractivas. Manejo lenguajes de programación y diseño con
            Adobe, enfocado en la gestión eficiente de equipos y el cumplimiento
            de plazos.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <a
            className="flex gap-2 items-center justify-center text-white bg-purple-700 p-4 w-auto rounded-full hover:text-gray-800 transition-all"
            href="mailto:juan.mayorquin@uao.edu.co"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-mail w-full h-full"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            <p>Contáctame</p>
          </a>
          <a
            className="text-white bg-purple-700 p-4 w-auto rounded-full hover:text-gray-800 transition-all"
            href="https://github.com/juanmayorquin"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github w-full h-full"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
