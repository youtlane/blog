import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="bg-gray-100 shadow-md">
            <ul className="flex justify-center space-x-8 p-4">
                <li>
                    <Link 
                        className="relative text-black font-bold px-4 py-2 transition-all duration-300 hover:bg-black hover:text-white rounded" 
                        to="/">Home
                    </Link>
                </li>
                <li>
                    <Link 
                        className="relative text-black font-bold px-4 py-2 transition-all duration-300 hover:bg-black hover:text-white rounded"
                        to="/about">About
                    </Link>
                </li>
                <li>
                    <Link
                        className="relative text-black font-bold px-4 py-2 transition-all duration-300 hover:bg-black hover:text-white rounded"
                        to="/articles">Articles
                    </Link>
                </li>
            </ul>
        </nav>
    );

}
export default NavBar;