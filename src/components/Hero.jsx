import React from 'react';

const Hero = () => {
    return (
        <div className="  h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hola! Soy <span className="text-blue-500">Juan Mayorquín</span> y soy <span className="text-green-500">Desarrollador Web</span>
            </h1>
            <div className="flex space-x-4 mt-8">
                <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                    GitHub
                </a>
                <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    LinkedIn
                </a>
                <a href="https://instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded">
                    Instagram
                </a>
                <a href="#conoce-mas" className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
                    Conoce más
                </a>
            </div>
        </div>
    );
}

export default Hero;