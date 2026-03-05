import Image from "next/image"

export default function FooterContact () {

return (
    <footer className="flex justify-center flex-col items-center gap-4 mb-10 text-white">
        <Image src="/assets/Group 9.png" alt="Description" width={70} height={70} />
        <h3 className=" text-3xl">
            Landrup Dans
        </h3>
        <p>Pulsen 8 . 4000 Roskilde</p>
        <p>Tlf. 3540 4550</p>
    </footer>
)
}