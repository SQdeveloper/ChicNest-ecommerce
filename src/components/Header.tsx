import { Link } from "react-router-dom";
import { CartFillIcon, PersonFillIcon, SearchIcon } from "./ui/icons";

const Header = () => {
    return (
        <header className="w-full px-8 items-center border-b-[1px] border-light-gray flex justify-between gap-2 h-16 text-dark-gray font-secondary bg-light-brown">
            <nav>
                <ul className="flex items-center gap-4">
                    <li>
                        <Link className="border-b-[1px] border-dark-gray pb-1" to={''}>Home</Link>
                    </li>
                    <li>
                        <Link to={''}>Shop</Link>
                    </li>
                    <li>
                        <Link to={''}>About Us</Link>
                    </li>
                    <li>
                        <Link to={''}>Pages</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <h1 className="font-bold text-2xl font-primary">ChicNest</h1>
            </div>
            <div className="flex items-center gap-7">
                <div className="flex w-64 border border-light-gray rounded-full py-1.5 px-3.5 text-sm">
                    <input 
                        type="text"
                        placeholder="Search..."
                        className="w-full border-none outline-none bg-transparent"
                    />
                    <SearchIcon/>
                </div>
                <div className="flex items-center gap-4">
                    <Link className="flex items-center relative justify-center rounded-full bg-brown w-8 aspect-square h-8" to={''}>
                        <CartFillIcon className="text-light-brown"/>
                        <div className="absolute top-[-4px] right-[-4px] bg-red-500 rounded-full w-4 h-4 flex justify-center items-center text-[10px] text-white font-secondary">1</div>
                    </Link>
                    <Link className="flex items-center justify-center rounded-full bg-brown w-8 aspect-square h-8" to={''}>
                        <PersonFillIcon className="text-light-brown"/>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;