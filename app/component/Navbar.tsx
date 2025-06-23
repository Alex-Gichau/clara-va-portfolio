import React from "react";
import Image from "next/image";

interface NavbarProps {
    profileImage: string;
    name: string;
}

const Navbar: React.FC<NavbarProps> = ({ profileImage, name }) => {
    return (
        <nav className="sticky top-8 z-50 mt-5 scroll-mt-5 backdrop-blur blur-5xl border-b border-gray-200 drop-shadow-amber-100 py-4 px-6 flex justify-between items-center shadow-2xl text-black mx-auto max-w-xl my-1.5 rounded-full">

            <div className="flex items-center space-x-4">
                <Image src={profileImage} alt="Profile" className="w-10 h-10 rounded-full" fill />
                <span className="text-lg font-semibold font-pacifico">{name}</span>
            </div>
            <ul className="flex space-x-6">
                <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;