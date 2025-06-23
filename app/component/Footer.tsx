import { FiSend } from "react-icons/fi";
import { FooterData } from "../data/footerData";
import React from "react";

interface FooterProps {
    contacts: FooterData[];
}

const Footer: React.FC<FooterProps> = ({ contacts }) => {

    return (
        <footer className="bg-gray-900 text-white py-6 max-w-5xl mx-auto rounded-3xl my-10">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 flex align-center justify-center"><FiSend className="mr-2 text-xl mt-3 text-green" />Lets Connect</h2>
                <p className="text-lg mb-4">Interested in working together</p>
                <input type="email" placeholder="Enter your email" className="p-2 rounded-md border border-gray-300 mb-4 w-64" />
                <a href="mailto:claranjeri2@gmail.com?subject=Interested to Work Together" target="_blank" className="bg-green-500 text-white px-4 py-2 mx-3 rounded-md hover:bg-green-600 transition duration-300">
                    Connect
                </a>
                <p className="text-sm mb-2">© Clara Njeri. All rights reserved.</p>
                <div className="flex flex-row justify-center space-x-4 mt-4 text-white">
                    {contacts.map((contactsItem) => (
                        <div key={contactsItem.id}>
                            <a href={contactsItem.linkUrl} className="hover:cursor-pointer opacity-55 text-xs">
                               <contactsItem.Icon className="inline-block mr-1 justify-center text-center" target="_blank" rel="noopener noreferrer"/>
                               {contactsItem.title}
                            </a>
                        </div>
                    ))}

                </div>
            </div>
        </footer>
    );
}

export default Footer;