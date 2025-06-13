import { FiCircle } from "react-icons/fi";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 max-w-5xl mx-auto rounded-1xl mb-10">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 flex align-center justify-center"><FiCircle className="mr-2 text-sm mt-3 text-green"/>Let's Connect</h2>
                <p className="text-lg mb-4">Interested in working together? I'd love to hear from you!</p>
                <p className="text-sm mb-2">© 2025 Clara Njeri. All rights reserved.</p>
                <p className="text-sm">Follow me on
                    <FiGithub/> <FiLinkedin/> <FiTwitter/>
                </p>
            </div>
        </footer>
    );
}