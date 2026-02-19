import Link from "next/link"

export default function LogIn () {

return (
    <div className="mx-auto">
    <button className="relative flex bottom-40 bg-gray-300 mx-auto px-5 py-3 rounded-lg text-black w-50">
        <p className="mx-auto">
            <Link href="/login">Log ind her</Link>
        </p>
    </button>
    
    </div>
)
}