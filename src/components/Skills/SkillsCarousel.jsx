import React from "react";
import Skill from "./Skill.jsx";
import BrushIcon from "../../assets/icons/BrushIcon.jsx";
import ReactIcon from "../../assets/icons/ReactIcon.jsx";
import MovieIcon from "../../assets/icons/MovieIcon.jsx";
import GamepadIcon from "../../assets/icons/GamepadIcon.jsx";
import BlenderIcon from "../../assets/icons/BlenderIcon.jsx";
import HeadphonesIcon from "../../assets/icons/HeadphonesIcon.jsx";

const SkillsCarousel = () => {
  const skills = [
    {
      icon: <ReactIcon/>,
      title: "Desarrollo Web Frontend",
      description:
        "Tengo experiencia en la creación de sitios web utilizando tecnologías modernas como HTML, CSS, JavaScript y frameworks como React.",
    },
    {
      icon: <BrushIcon/>,
      title: "Diseño Gráfico",
      description:
        "Experiencia en la creación de diseños visuales atractivos utilizando herramientas como Adobe Photoshop e Illustrator.",
    },
    {
      icon: <MovieIcon/>,
      title: "Edición de Video",
      description:
        "Habilidad en la edición de videos utilizando software como Adobe Premiere Pro y After Effects.",
    },
    {
      icon: <GamepadIcon/>,
      title: "Desarrollo de Videojuegos",
      description:
        "Conocimiento en el desarrollo de videojuegos utilizando motores como Unity y Unreal Engine.",
    },
    {
      icon: <BlenderIcon/>,
      title: "Modelado 3D",
      description:
        "Habilidad en el modelado 3D utilizando software como Blender y Autodesk Maya.",
    },
    {
      icon: <HeadphonesIcon/>,
      title: "Producción de Audio",
      description:
        "Experiencia en la producción y edición de audio utilizando herramientas como Audacity y Adobe Audition.",
    },
  ];
  return (
    <div className="flex items-center overflow-x-auto space-x-4 no-scrollbar snap-x snap-mandatory">
      {skills.map((skill, index) => (
        <div className="" key={index}>
          <Skill {...skill} />
        </div>
      ))}
    </div>
  );
};

export default SkillsCarousel;
