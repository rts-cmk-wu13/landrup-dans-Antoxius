import { getActivityById } from "@/app/lib/activities";
import Link from "next/link";


export default async function RosterPage ( { params } ) {
    const { id } = await params;

    const activity = await getActivityById(id);

return (
        <>
            <Link href={"/profile"} className="text-white mb-4 inline-block">Tilbage til profil</Link>
            <ul className="">
                { activity.users.map( user => (
                    <li key={user.id} className="text-white"> {user.firstname} {user.lastname} </li>
                ))}
            </ul>
        </>
    )
}