import { FiArrowDown, FiPhoneCall } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-row items-center justify-center max-w-3xl mx-auto gap-3">
            <div>
                <Image
                    src="/clara.png"
                    alt="Clara Njeri"
                    width={100}
                    height={150}
                    className="h-100 border w-150 object-cover mx-auto"
                />
            </div>
            <div className="flex flex-col items-center justify-center text-left gap-4">
                <h1 className="text-4xl font-bold text-gray-950">Your Professional Virtual Assistant</h1>
                <p className="text-m text-gray-600">I am 5-star rated assistant with proficiency in customer service, travel research and content scheduling just to mention.</p>
                <div className="flex gap-4 justify-start mx-auto ml-0">
                    <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-white hover:text-gray-900 transition flex flex-row gap-3 items-center border-2"><FiArrowDown />View Projects</button>
                    <button className="px-6 py-3 text-black hover:bg-black hover:text-white transition border-black border-2 rounded-full flex flex-row gap-3 items-center"><FiPhoneCall />Book A Call</button>

                </div>
            </div>
        </section>
    )
}