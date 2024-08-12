import { Link } from "react-router-dom";
import { CartFillIcon, PersonFillIcon } from "./ui/icons";
import InputSearch from "./ui/InputSearch";
import { useProducts } from "../contexts/products";

const Header = () => {
    const { productsCart } = useProducts();

    return (
        <header className="w-full px-8 items-center border-b-[1px] border-light-gray flex justify-between gap-2 h-16 text-dark-gray font-secondary bg-light-brown">
            <nav>
                <ul className="flex items-center gap-4 text-md">
                    <li>
                        <Link className="ancle-style" to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link className="ancle-style" to={'/shop'}>Shop</Link>
                    </li>
                    <li>
                        <Link className="ancle-style" to={'/about-us'}>About Us</Link>
                    </li>
                    <li>
                        <Link className="ancle-style" to={'/contact-us'}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
            <Link to={'/'}>
                <h1 className="font-bold text-3xl font-primary">ChicNest</h1>
            </Link>
            <div className="flex items-center gap-7">
                <InputSearch placeholder="Search..."/>
                <div className="flex items-center gap-4">
                    <Link 
                        className="flex items-center relative justify-center rounded-full bg-brown w-8 aspect-square h-8" 
                        to={'/cart'}
                    >
                        <CartFillIcon className="text-light-brown"/>
                        <div className="absolute top-[-4px] right-[-4px] bg-red-500 rounded-full w-4 h-4 flex justify-center items-center text-[10px] text-white font-secondary">
                            {productsCart.length}
                        </div>
                    </Link>
                    <Link className="flex items-center justify-center rounded-full bg-brown w-8 aspect-square h-8" 
                        to={'/login'}
                    >
                        <PersonFillIcon className="text-light-brown"/>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;