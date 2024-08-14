import { Link } from "react-router-dom";
import { CartFillIcon, FacebookIcon, GoogleIcon, LinkedinkIcon, PersonFillIcon } from "./ui/icons";
import InputSearch from "./ui/InputSearch";
import { useProducts } from "../contexts/products";
import { useEffect, useState } from "react";

const Header = () => {
    const { productsCart } = useProducts();
    const [scroll, setScroll] = useState(true);
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
        if(!scroll) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    },[scroll])

    const handleChange = ()=>{        
        setChecked(prev => !prev)
    }

    const closeModal = ()=>{
        setChecked(false)
        setScroll(true)
    }

    return (
        <header className="max-sm:px-5 w-full px-8 items-center border-b-[1px] border-light-gray flex justify-between gap-2 h-16 text-dark-gray font-secondary bg-light-brown">
            <div className="hidden max-[1000px]:block">
                <input checked={checked} onChange={handleChange} className="peer hidden" id="menu" type="checkbox" />
                <label onClick={()=>{setScroll(prev => !prev)}} className="z-50 absolute top-5 left-5 flex peer-checked:active-animation flex-col gap-[0.3rem] cursor-pointer w-7" htmlFor="menu">
                    <div className="transition-all duration-500 block w-full h-[3px] bg-dark-gray"></div>
                    <div className="transition-all duration-500 block w-full h-[3px] bg-dark-gray"></div>
                    <div className="transition-all duration-500 block w-full h-[3px] bg-dark-gray"></div>
                </label>
                <div className="flex-col gap-8 justify-center items-center peer-checked:pointer-events-auto peer-checked:opacity-100 peer-checked:translate-y-0 opacity-0 pointer-events-none -translate-y-full transition-all duration-500 max-xl:flex bg-white z-40 hidden w-full min-h-[100svh] fixed top-0 left-0">
                    <ul className="w-fit flex flex-col gap-6 text-4xl font-primary">
                        <li>
                            <Link onClick={closeModal} to={'/'} >Home</Link>
                        </li>
                        <li>
                            <Link onClick={closeModal} to={'/about-us'} >About Us</Link>                            
                        </li>
                        <li>
                            <Link onClick={closeModal} to={'/shop'} >Shop</Link>                            
                        </li>
                        <li>                        
                            <Link onClick={closeModal} to={'/contact-us'} >Contact Us</Link>                            
                        </li>
                    </ul>
                    <div className="flex gap-4">
                        <a href="">
                            <GoogleIcon className="p-2 border border-brown rounded-full w-10 text-brown h-10"/>
                        </a>
                        <a href="">
                            <FacebookIcon className="p-2 border border-brown rounded-full w-10 text-brown h-10"/>
                        </a>
                        <a href="">
                            <LinkedinkIcon className="p-2 border border-brown rounded-full w-10 text-brown h-10"/>
                        </a>                                                                                                                
                    </div>
                </div>
            </div>
            <nav className="max-[1000px]:hidden">
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
                <h1 className="max-xl:ml-16 font-bold text-3xl font-primary">ChicNest</h1>
            </Link>
            <div className="flex items-center gap-7">
                <InputSearch className="max-[1000px]:hidden" placeholder="Search..."/>
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