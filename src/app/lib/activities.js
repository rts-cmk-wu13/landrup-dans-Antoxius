export async function getAllActivities () {
    const res = await fetch("http://localhost:4000/api/v1/activities");
    if (!res.ok) {
        throw new Error("Failed to fetch activities");
    }
    return res.json();
}

export async function getActivityById (id) {
    const res = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch activity with id ${id}`);
    }
    return res.json()
};