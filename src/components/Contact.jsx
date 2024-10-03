import React from "react";

const Contact = () => {
return (
    <section id="Contacto" className="px-5 py-12 pt-12 md:py-6 md:px-16">
        <h2 className="font-semibold text-3xl md:text-4xl text-center mb-10">Contáctame</h2>
        <form className="max-w-lg mx-auto md:text-lg">
            <div className="mb-4">
                <label className="block text-xl font-medium mb-2" htmlFor="name">
                    Nombre
                </label>
                <input
                    className="bg-transparent border-2 border-gray-800 shadow appearance-none  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                />
            </div>
            <div className="mb-4">
                <label className="block text-xl font-medium mb-2" htmlFor="email">
                    Correo
                </label>
                <input
                    className="bg-transparent border-2 border-gray-800 shadow appearance-none  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Tu correo"
                />
            </div>
            <div className="mb-6">
                <label className="block text-xl font-medium mb-2" htmlFor="message">
                    Mensaje
                </label>
                <textarea
                    className="bg-transparent border-2 border-gray-800 shadow appearance-none  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Tu mensaje"
                    rows="5"
                ></textarea>
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-gradient-to-b from-purple-700 to-purple-900 -2 -purple-950 p-4 w-auto rounded-full hover:text-white hover:bg-none hover:bg-slate-800 hover:-2 hover:-purple-700 transition-all text-white font-semibold py-2 px-4 focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Enviar
                </button>
            </div>
        </form>
    </section>
);
};

export default Contact;
