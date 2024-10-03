import React from "react";
import SkillsCarousel from "./Skills/SkillsCarousel";

const Skills = () => {
  return (
    <section id="Habilidades" className="my-16 px-5 pt-12 md:pt-24 md:px-16">
      <h2 className="font-bold text-4xl text-center mb-10">Mis Habilidades</h2>
      <SkillsCarousel />
    </section>
  );
};

export default Skills;
