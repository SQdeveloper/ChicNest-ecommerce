import { Link } from "react-router-dom";
import Button from "./ui/Button";

const Footer = () => {
    return (
        <footer className="bg-light-brown font-secondary px-10 py-10 flex gap-5 justify-between mt-12">
            <div className="flex flex-col gap-4">
                <aside>
                    <h3 className="mb-2 font-bold">Where about</h3>
                    <p className="text-rat-gray text-sm">4517 Washinton Ave. Manchester. Kentucky 34345</p>
                </aside>
                <aside>
                    <h3 className="mb-2 font-bold">Contact</h3>
                    <p className="text-rat-gray text-sm">(088) 4532-435</p>
                </aside>
                <aside>
                    <h3 className="mb-2 font-bold">Mailbox</h3>
                    <p className="text-rat-gray text-sm">hello@lavhistglamour.io</p>
                </aside>
            </div>
            <aside>
                <h3 className="mb-2 font-bold">Pages</h3>
                <ul className="text-sm flex flex-col gap-2 text-rat-gray">
                    <li>
                        <Link to={''}>Home</Link>                        
                    </li>
                    <li>
                        <Link to={''}>About us</Link>                        
                    </li>
                    <li>
                        <Link to={''}>Shop</Link>                        
                    </li>
                    <li>
                        <Link to={''}>Contact us</Link>                        
                    </li>
                </ul>
            </aside>
            <aside>
                <h3 className="mb-2 font-bold">Resource</h3>
                <ul className="text-sm flex flex-col gap-2 text-rat-gray">
                    <li>
                        <Link to={''}>FAQ</Link>                        
                    </li>
                    <li>
                        <Link to={''}>Reviews</Link>                        
                    </li>                
                    <li>
                        <Link to={''}>Return Policy</Link>                        
                    </li>
                </ul>
            </aside>
            <aside>
                <h3 className="mb-2 font-bold">Categories</h3>
                <ul className="text-sm flex flex-col gap-2 text-rat-gray">
                    <li>
                        <Link to={''}>Anillos</Link>                        
                    </li>
                    <li>
                        <Link to={''}>Collares</Link>                        
                    </li>
                    <li>
                        <Link to={''}>Pulseras</Link>                        
                    </li>
                    <li>
                        <Link to={''}>Pircings</Link>                        
                    </li>
                </ul>
            </aside>
            <aside>
                <h3 className="mb-2 font-bold">Subscribe</h3>
                <form className="w-64 flex flex-col gap-4" action="">
                    <input className="text-sm border border-rat-gray px-3 bg-transparent rounded-full py-2" placeholder="Enter your name" type="text" />
                    <input className="text-sm border border-rat-gray px-3 bg-transparent rounded-full py-2" placeholder="Enter email" type="text" />
                    <Button className="w-full">Submit</Button>
                </form>
            </aside>
        </footer>
    );
};

export default Footer;