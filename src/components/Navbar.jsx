import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-[#3C414B] w-screen p-3 lg:p-8 rounded-b-lg lg:rounded-b-2xl lg:drop-shadow-md fixed">
        <div className="mx-auto flex justify-between items-center">
          <div className="text-white text-xl lg:text-3xl font-bold">
            Juan Mayorquín |
            <span className="text-base lg:text-xl font-normal"> Portafolio</span>
          </div>
          <div className="block lg:hidden">
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
          <ul className="hidden lg:flex space-x-8 text-xl">
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-all"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-all"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-all"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-all"
              >
                Contacto
              </a>
            </li>
          </ul>
          {isMenuOpen && (
            <ul className="lg:hidden absolute bg-gray-800 w-full left-0 top-12 space-y-4 p-4 rounded-b-lg">
              <li>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-all"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-all"
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-all"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-all"
                >
                  Contacto
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
