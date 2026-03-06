import {cookies} from "next/headers"; 
import Link from "next/link";
import CreateActivity from "../components/CreateActivityForm";
export default async function CreatePage () {

    const cookieStore = await cookies();
    const role = cookieStore.get("role").value; // henter brugerens rolle fra cookie, som blev sat ved login i actions.js.
    // Jeg bruger denne cookie til at håndtere adgangskontrol på denne side, så kun instruktører kan se indholdet og oprette hold.
    // Hvis rollen ikke er "instructor", viser jeg en besked om, at de ikke har adgang, og giver dem et link tilbage til profilen.
    // Hvis rollen er "instructor", viser jeg en velkomstbesked.


return role !== "instructor" ? (
    <>
        <p className="text-red-500">Du har ikke adgang til at oprette hold</p>
        <Link href={"/profile"} className="text-white mt-5 inline-block">Tilbage til profil</Link>
    </>
) : (
    <>
        <p className="text-white">Velkommen, instruktør!</p>
        <CreateActivity/>
    </>
)
}