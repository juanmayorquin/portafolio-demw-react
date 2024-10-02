import React from "react";
import { useState } from "react";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 backdrop-blur-xl w-screen p-3 md:p-8 rounded-b-lg md:rounded-b-2xl md:drop-shadow-md fixed">
        <div className="mx-auto flex justify-between items-center">
          <div className="text-white text-xl md:text-3xl font-bold">
            Juan Mayorquín |
            <span className="text-base md:text-xl font-normal">
              {" "}
              Portafolio
            </span>
          </div>
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="hidden md:flex space-x-8 text-xl">
            <NavbarButton name="Inicio" />
            <NavbarButton name="Sobre mí" />
            <NavbarButton name="Proyectos" />
            <NavbarButton name="Contacto" />
          </ul>
          {isMenuOpen && (
            <ul className="md:hidden absolute bg-gray-800 w-full left-0 top-12 space-y-4 p-4 rounded-b-lg">
              <NavbarButton name="Inicio" />
              <NavbarButton name="Sobre mí" />
              <NavbarButton name="Proyectos" />
              <NavbarButton name="Contacto" />
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
