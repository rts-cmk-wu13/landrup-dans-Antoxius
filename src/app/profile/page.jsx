import { cookies } from "next/headers";
import Link from "next/link"

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
        <h1>Min Profil</h1>
        <div>
            {/* <img src="placeholder" alt="" srcset="" /> */}
            <p>{user.firstname} {user.lastname}</p>
            <p>{user.role == "instructor" ? "Instruktør" : "Medlem"}</p>
        </div>
        <h2>Tilmeldte hold</h2>
        <ul>
            {user.activities.map(activity => (
                <li key={activity.id}>
                    <h3>{activity.name}</h3>
                    {/* <Link href={`/activities/${activity.id}`}>Se hold</Link> */}
                    <p>{`/activities/${activity.id}`}</p>
                    <Link href={`/activities/${activity.id}`}>Se hold</Link>
                </li>
            ))}
        </ul>

    
    </>
)
}