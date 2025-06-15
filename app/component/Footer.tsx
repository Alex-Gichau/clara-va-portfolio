import { FiSend } from "react-icons/fi";
// import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 max-w-5xl mx-auto rounded-3xl mb-10">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 flex align-center justify-center"><FiSend className="mr-2 text-xl mt-3 text-green"/>Lets Connect</h2>
                <p className="text-lg mb-4">Interested in working together</p>
                <input type="email" placeholder="Enter your email" className="p-2 rounded-md border border-gray-300 mb-4 w-64" />
                <a href="mailto:claranjeri@gmail.com?subject=Interested to Work Together" target="_blank" className="bg-green-500 text-white px-4 py-2 mx-3 rounded-md hover:bg-green-600 transition duration-300">
                    Connect
                </a>
                <p className="text-sm mb-2">© Clara Njeri. All rights reserved.</p>
                {/* <div className="flex flex-row justify-center space-x-4 mt-4">
                    <p className="text-sm">Follow me on <FiGithub /> <FiLinkedin /> <FiTwitter />
                    </p>
                </div> */}
            </div>
        </footer>
    );
}