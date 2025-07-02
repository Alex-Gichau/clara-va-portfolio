import { FiArrowDown, FiPhoneCall } from "react-icons/fi";
import Image from "next/image";

export default function Hero({ className }: { className?: string }) {
    return (
        <section className={`flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto gap-10 p-4 ${className}`}>
            <div className="relative flex items-center justify-center w-full md:w-1/2 lg:w-1/2 p-4">
                {/* Blurred shapes */}
                <div className="absolute top-1/4 left-0 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 -z-10" />
                <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 -z-10" />
                <Image
                    src="/clara.png"
                    alt="Clara Njeri"
                    width={600}
                    height={800}
                    className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg object-cover object-top rounded-lg shadow-lg"
                    priority
                />
                <div
                    className="absolute bottom-0 left-0 w-full h-1/3 pointer-events-none"
                    style={{
                        background: "linear-gradient(to top, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 90%)"
                    }}
                />
            </div>
            <div className="flex flex-col items-center text-center md:items-start md:text-left gap-6">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Your Professional Virtual Assistant</h1>
                <p className="text-lg md:text-xl text-gray-700">I am a 5-star rated assistant with proficiency in customer service, travel research, and content scheduling.</p>
                <div className="flex flex-row flex-wrap justify-center md:justify-start gap-4 w-full mt-4">
                    <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md flex flex-row gap-3 items-center"><FiArrowDown />View Projects</button>
                    <button className="px-8 py-3 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition flex flex-row gap-3 items-center"><FiPhoneCall />Book A Call</button>
                </div>
            </div>
        </section>
    )
}