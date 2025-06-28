import { FiArrowDown, FiPhoneCall } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center max-w-3xl mx-auto gap-10 my-10 p-4">
            <div className="relative flex items-center justify-center w-full md:w-1/2 lg:w-1/3">
                {/* Yellow circle background */}
                <div className="absolute w-48 h-48 md:w-[20rem] md:h-[20rem] bg-yellow-200 rounded-full -z-10 mr-5 blur-2xl" />
                <Image
                    src="/clara.png"
                    alt="Clara Njeri"
                    width={300}
                    height={450}
                    className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md border object-cover object-top rounded-lg"
                    priority
                />
                <div
                    className="absolute bottom-0 left-0 w-full h-1/3 pointer-events-none"
                    style={{
                        background: "linear-gradient(to top, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 70%)"
                    }}
                />
            </div>
            <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-950">Your Professional Virtual Assistant</h1>
                <p className="text-base md:text-lg text-gray-600">I am 5-star rated assistant with proficiency in customer service, travel research and content scheduling just to mention.</p>
                <div className="flex flex-col md:flex-row gap-4 w-full justify-center md:justify-start">
                    <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-white hover:text-gray-900 transition flex flex-row gap-3 items-center border-2"><FiArrowDown />View Projects</button>
                    <button className="px-6 py-3 text-black hover:bg-black hover:text-white transition border-black border-2 rounded-full flex flex-row gap-3 items-center"><FiPhoneCall />Book A Call</button>
                </div>
            </div>
        </section>
    )
}