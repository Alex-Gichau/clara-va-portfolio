import { FiArrowDown, FiPhoneCall } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-row items-center justify-center max-w-3xl mx-auto gap-10 my-10">
            <div className="relative flex items-center justify-center">
                {/* Gray circle background */}
                <div className="absolute w-[20rem] h-[20rem] bg-yellow-200 rounded-full -z-10 mr-5 blur-2xl" />
                <Image
                    src="/clara.png"
                    alt="Clara Njeri"
                    width={100}
                    height={150}
                    className="h-100 border w-150 object-cover object-top"
                />
                <div
                    className="absolute bottom-0 left-0 w-full h-1/3 pointer-events-none"
                    style={{
                        background: "linear-gradient(to top, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 70%)"
                    }}
                />
            </div>
            <div className="flex flex-col items-center justify-center text-left gap-4">
                <h1 className="text-5xl font-bold text-gray-950">Your Professional Virtual Assistant</h1>
                <p className="text-m text-gray-600">I am 5-star rated assistant with proficiency in customer service, travel research and content scheduling just to mention.</p>
                <div className="flex gap-4 justify-start mx-auto ml-0">
                    <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-white hover:text-gray-900 transition flex flex-row gap-3 items-center border-2"><FiArrowDown />View Projects</button>
                    <button className="px-6 py-3 text-black hover:bg-black hover:text-white transition border-black border-2 rounded-full flex flex-row gap-3 items-center"><FiPhoneCall />Book A Call</button>

                </div>
            </div>
        </section>
    )
}