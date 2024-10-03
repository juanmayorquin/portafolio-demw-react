import React from "react";
import GithubIcon from "../assets/icons/GithubIcon";
import HeroButton from "./Hero/HeroButton";
import ProjectsCarousel from "./Projects/ProjectsCarousel";

const Projects = () => {
  const projects = [
    {
      img: "src/assets/img/login.png",
      title: "Login DEMW",
      desc: "Proyecto de clase: una página de inicio de sesión creada con HTML y CSS, demostrando habilidades básicas de diseño web.",
      href: "https://github.com/juanmayorquin/login-demw",
    },
    {
      img: "src/assets/img/portfolio.png",
      title: "Portafolio DEMW",
      desc: "Proyecto de clase: un portafolio personal creado con HTML y CSS, demostrando habilidades básicas de diseño web y desarrollo frontend.",
      href: "https://github.com/juanmayorquin/portafolio-demw",
    },
    {
      img: "src/assets/img/react-components.png",
      title: "Ejercicio Componentes React",
      desc: "Actividad en clase: un primer acercamiento a componentes de React para la creación de una página web sencilla.",
      href: "https://github.com/juanmayorquin/ejercicio-componentes-react",
    },
    {
      img: "src/assets/img/carreer-information.png",
      title: "Información sobre ingeniería multimedia",
      desc: "Actividad en clase: un primer acercamiento a HTML y CSS para la creación de una página web sencilla.",
      href: "https://github.com/juanmayorquin/prueba-demw",
    },
    {
      img: "src/assets/img/comparator.png",
      title: "Comparador",
      desc: "Actividad de clase: una página web que compara dos números, creada con HTML y JavaScript.",
      href: "https://github.com/juanmayorquin/demw-clase-8",
    },
    {
      img: "src/assets/img/royal-rush.png",
      title: "Royal Rush",
      desc: "Proyecto de clase: Videojuego creado con Unity y C# para la asignatura de Computación Gráfica.",
      href: "https://github.com/juanmayorquin/breakfast-rush",
    },
  ];
  return (
    <section id="Proyectos" className="px-5 pt-12 md:py-6 md:px-16">
      <h2 className="font-bold text-3xl md:text-4xl text-center mb-10">Mis proyectos</h2>
      <ProjectsCarousel projects={projects} />
    </section>
  );
};

export default Projects;
