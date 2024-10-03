import React from 'react'

const Footer = () => {
return (
    <footer className="bg-black text-white py-4">
        <div className="container mx-auto text-center px-4">
            <p>&copy; 2024 Juan Mayorquín. All rights reserved.</p>
            <div className="mt-2 flex flex-col sm:flex-row justify-center">
                <a href="#" className="text-gray-400 hover:text-white mx-2 my-1 sm:my-0">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white mx-2 my-1 sm:my-0">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white mx-2 my-1 sm:my-0">Contact Us</a>
            </div>
        </div>
    </footer>
)
}

export default Footer