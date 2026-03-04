import { FiHome } from "react-icons/fi";
import { FaListUl, FaUserLarge } from "react-icons/fa6";
export default function Navigation () {

return (
    <>
        <div className="h-16"/>
        <footer>
            <nav className="fixed inset-x-0 bottom-0 z-50 bg-gray-300 p-4 px-4">
                <ul className="flex justify-between">
                    <li className="flex">
                        <a href="/" className="flex flex-col items-center gap-2">
                        <div className="">
                            <FiHome/>
                        </div>
                            <p className="text-sm">Home</p>
                        </a>
                    </li>
                    <li className="flex">
                        <a href="/activities" className="flex flex-col items-center gap-2">
                            <div className="">
                                <FaListUl/>
                            </div>
                            <p className="text-sm">Activities</p>
                        </a>
                    </li>
                    <li className="flex">
                        <a href="/profile" className="flex flex-col items-center gap-2">
                            <div className="">
                                <FaUserLarge/>
                            </div>
                            <p className="text-sm">Profile</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    </>
)
}