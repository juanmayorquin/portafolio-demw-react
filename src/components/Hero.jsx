import React from "react";
import { Typewriter } from "react-simple-typewriter";
import HeroButton from "./HeroButton";
import GithubIcon from "../assets/GithubIcon";
import LinkedinIcon from "../assets/LinkedInIcon";
import MailIcon from "../assets/MailIcon";

const Hero = () => {
  return (
    <section className="h-screen md:grid md:grid-cols-2 justify-center items-end m-auto px-5 py-20 md:px-16 ">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <p className="text-2xl">Hola,</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
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
          <HeroButton icon={<MailIcon />} text={"Contáctame"} href={"mailto:juan.mayorquin@uao.edu.co"} />
          <HeroButton icon={<GithubIcon />} href={""}/>
          <HeroButton icon={<LinkedinIcon />} href={""}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
