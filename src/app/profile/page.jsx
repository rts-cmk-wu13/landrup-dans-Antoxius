import { cookies } from "next/headers";
import Link from "next/link"
import { FaUser } from "react-icons/fa";
import Navigation from "../components/Navigation";
import InstructorActivities from "@/app/components/InstructorActivities";

export default async function ProfilePage() {

    const cookieStore = await cookies();
    const userId = cookieStore.get("userId").value;
    const token = cookieStore.get("authToken").value;

    console.log(userId);
    console.log(token);
    const res = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        cache: "no-store" // for at sikre at jeg altid får opdaterede data og ikke en cached version, da det er brugerens profil og den skal være opdateret
    })
    
    const user = await res.json();
    // localStorage.setItem("userActivities", JSON.stringify(user.activities)) // gemmer brugerens aktiviteter i localStorage, så jeg kan bruge det på andre sider uden at skulle hente det igen
    console.log(user);

return (
    <>
        <h1 className="text-white text-center text-2xl py-5">Min Profil</h1>
        <div className="text-background text-center bg-white py-3">
            <FaUser className="mx-auto text-6xl"/>

            <p className="mt-2 text-2xl font-bold">{user.firstname} {user.lastname}</p>
            <p>{user.role == "instructor" ? "Instruktør" : "Medlem"}</p>
        </div>
        <div className="m-5">
        <h2 className="text-white text-xl mb-2">Tilmeldte hold</h2>

        { user.role === "instructor" ? (
            <>
                <p className="text-white">Du er instruktør, og har derfor ingen tilmeldte hold.</p>
                <InstructorActivities userId={user.id}/>
            </>
        ) : (
            <ul className="p-5 mt-4">
                {user.activities.map(activity => (
                    <li key={activity.id} className="bg-white/70 p-5 rounded-xl mb-5 flex flex-col gap-2">
                        <h3 className="font-bold text-2xl">{activity.name}</h3>
                        <p>{activity.weekday} kl.{activity.time}</p>
                        <Link href={`/activities/${activity.id}`} className="bg-background self-start text-white rounded-xl inline-block px-10 py-3">vis hold</Link>
                    </li>
                ))}
            </ul>
        )}
        </div>

        <Navigation />
    </>
)
}