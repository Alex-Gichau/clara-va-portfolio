import React from "react";
import Image from "next/image";

interface NavbarProps {
    name: string;
}

const Navbar: React.FC<NavbarProps> = ({ name }) => {
    return (
        <nav className="sticky top-8 z-50 mt-5 scroll-mt-5 backdrop-blur blur-5xl border-b border-gray-200 drop-shadow-amber-100 py-4 px-6 flex justify-between items-center shadow-2xl text-black mx-auto max-w-xl my-1.5 rounded-full">

            <div className="flex items-center space-x-4">
                <Image src="/clara.png" alt="Profile" width={40} height={40} className="w-10 h-10 rounded-full object-cover object-top border-2 border-white" priority />
                <span className="text-lg font-semibold font-pacifico">{name}</span>
            </div>
            <ul className="flex space-x-2">
                <li><a href="#home" className="px-2 py-1 rounded-full font-bold">Home</a></li>
                <li><a href="#projects" className=" px-2 py-1 rounded-full font-bold">Projects</a></li>
                <li><a href="#contact" className=" px-2 py-1 rounded-full font-bold">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;