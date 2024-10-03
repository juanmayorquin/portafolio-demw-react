import React from 'react'

const Footer = () => {
return (
    <footer className="bg-black text-white py-16">
        <div className="container mx-auto text-center px-4">
            <p>&copy; 2024 Juan Mayorquín. All rights reserved.</p>
            <div className="mt-2 flex flex-col sm:flex-row justify-center">
                <a href="https://www.github.com/juanmayorquin" className="text-gray-400 hover:text-white mx-2 my-1 sm:my-0">GitHub</a>
                <a href="https://www.linkedin.com/in/juan-jos%C3%A9-mayorqu%C3%ADn-cabrera-09920b275/" className="text-gray-400 hover:text-white mx-2 my-1 sm:my-0">LinkedIn</a>
                <a href="mailto:juan.mayorquin@uao.edu.co" className="text-gray-400 hover:text-white mx-2 my-1 sm:my-0">Email</a>
            </div>
        </div>
    </footer>
)
}

export default Footer