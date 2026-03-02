import Image from "next/image";

export default async function ActivitiesPage ({ params }) {
    const { id } = await params;

    const res = await fetch(`http://localhost:4000/api/v1/activities/${id}`)
    const activity = await res.json();

    console.log(activity);
    
return (
    <div className="text-white">
    <div className="relative h-[50vh]">
        <Image src={activity.asset.url} alt={activity.name} fill unoptimized className="w-full h-full object-cover" />
    </div>
        <h1>Activity {id}</h1>
        <p>{activity.name}</p>
        <p>{activity.minAge} - {activity.maxAge} år</p>
        <p>{activity.description}</p>
    </div>
)
}