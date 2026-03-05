import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";

export default async function page () {
    const res = await fetch(`http://localhost:4000/api/v1/activities`)
    const activities = await res.json();
    console.log(activities);
    
return (
    <div className="container mx-auto px-4 py-8">
        <h1>Activities</h1>
        {activities.map(activity => (
            <Link href={`/activities/${activity.id}`} key={activity.id}>
                <div className="relative h-[80vw] mb-6 rounded-4xl rounded-br-none overflow-hidden">
                <Image src={activity.asset.url} alt={activity.name} fill unoptimized className="h-full w-full object-cover"/>
                <article className="absolute bottom-0 left-0 w-full bg-[#003147]/70 text-white p-4 rounded-tr-4xl">
                <h2>{activity.name}</h2>
                <p>{activity.minAge} - {activity.maxAge} år</p>
                </article>
                </div>
                
            </Link>
            ))
        }
        <Navigation />
    </div>
)
}