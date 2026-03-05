import Image from "next/image";

export default function SignUpPage () {

return (
    <>
        <div className="relative flex flex-col p-20 gap-5 items-center ">
            <Image src="/assets/Group 9.png" alt="hero image logo" width={50} height={50} className="relative"/>
            <div className="flex">
                <Image src="/assets/Group 10.png" alt="hero image logo" width={400} height={50} className="relative border-b-8-black"/>
            </div>
            <Image src="/assets/Rectangle 20.png" alt="rectangle image" width={600} height={100} className="relative"/>
        </div>
        
    </>
)
}