import Image from "next/image";
import LoginButton from "./LoginButton";
import { FiChevronsDown } from "react-icons/fi";

export default function Hero () {

return (
    <>
        <div className="relative isolate w-full min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/heroimg.jpg"
                    alt="Hero Image"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative flex min-h-screen flex-col p-20 gap-5 items-center">
                <Image src="/assets/Group 9.png" alt="hero image logo" width={50} height={50} className="relative"/>
                <div className="flex">
                    <Image src="/assets/Group 10.png" alt="hero image logo" width={400} height={50} className="relative border-b-8-black"/>
                </div>
                <Image src="/assets/Rectangle 20.png" alt="rectangle image" width={600} height={100} className="relative"/>
            </div>
            <LoginButton />
            <button className="w-full">
                <FiChevronsDown className="relative bottom-40 mx-auto text-black align-center" size={100}/>
            </button>
        </div>
    </>
)
}
