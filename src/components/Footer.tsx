import { Link } from "react-router-dom";
import Button from "./ui/Button";

const Footer = () => {
    return (
        <footer className="bg-light-brown">
        <div className="mx-auto max-w-[1280px] max-sm:w-full max-sm:flex max-sm:flex-col max-sm:px-5 max-[800px]:grid max-[800px]:grid-cols-2 font-secondary px-10 py-10 flex gap-5 justify-between">
                <div className="flex flex-col gap-4">
                    <aside>
                        <h3 className="max-sm:text-2xl mb-2 font-bold">Where about</h3>
                        <p className="max-sm:text-xl text-rat-gray text-sm">4517 Washinton Ave. Manchester. Kentucky 34345</p>
                    </aside>
                    <aside>
                        <h3 className="max-sm:text-2xl mb-2 font-bold">Contact</h3>
                        <p className="max-sm:text-xl text-rat-gray text-sm">(088) 4532-435</p>
                    </aside>
                    <aside>
                        <h3 className="max-sm:text-2xl mb-2 font-bold">Mailbox</h3>
                        <p className="max-sm:text-xl text-rat-gray text-sm">hello@lavhistglamour.io</p>
                    </aside>
                </div>
                <aside className="max-[800px]:col-start-2 max-[800px]:col-end-3 max-[800px]:row-start-2 max-[800px]:-end-3">
                    <h3 className="max-sm:text-2xl mb-2 font-bold">Pages</h3>
                    <ul className="text-sm flex flex-col gap-2 text-rat-gray">
                        <li className="w-fit">
                            <Link className="ancle-style max-sm:text-xl" to={'/'}>Home</Link>                        
                        </li>
                        <li className="w-fit">
                            <Link className="ancle-style max-sm:text-xl" to={'/about-us'}>About us</Link>                        
                        </li>
                        <li className="w-fit">
                            <Link className="ancle-style max-sm:text-xl" to={'/shop'}>Shop</Link>                        
                        </li>
                        <li className="w-fit">
                            <Link className="ancle-style max-sm:text-xl" to={'/contact-us'}>Contact us</Link>                        
                        </li>
                    </ul>
                </aside>
                <aside>
                    <h3 className="max-sm:text-2xl mb-2 font-bold">Resource</h3>
                    <ul className="text-sm flex flex-col gap-2 text-rat-gray">
                        <li className="w-fit">
                            <Link className="ancle-style max-sm:text-xl" to={'/Q&A'}>FAQ</Link>                        
                        </li>
                        <li className="w-fit">
                            <Link className="ancle-style max-sm:text-xl" to={'/refund-policy'}>Refund policy</Link>                        
                        </li>                
                        <li className="w-fit">
                            <Link className="ancle-style max-sm:text-xl" to={'/terms-of-service'}>Terms of service</Link>                        
                        </li>
                    </ul>
                </aside>
                {/* <aside>
                    <h3 className="max-sm:text-2xl mb-2 font-bold">Categories</h3>
                    <ul className="text-sm flex flex-col gap-2 text-rat-gray">
                        <li className="w-fit">
                            <Link className="ancle-style max-sm:text-xl" to={''}>Anillos</Link>                        
                        </li>
                        <li className="w-fit">
                            <Link className="ancle-style max-sm:text-xl" to={''}>Collares</Link>                        
                        </li>
                        <li className="w-fit">
                            <Link className="ancle-style max-sm:text-xl" to={''}>Pulseras</Link>                        
                        </li>
                        <li className="w-fit">
                            <Link className="ancle-style max-sm:text-xl" to={''}>Pircings</Link>                        
                        </li>
                    </ul>
                </aside> */}
                <aside className="max-[800px]:col-start-2 max-[800px]:col-end-3 max-[800px]:row-start-1 max-[800px]:-end-2">
                    <h3 className="max-sm:text-2xl mb-2 font-bold">Subscribe</h3>
                    <form className="max-sm:w-full w-64 flex flex-col gap-4" action="">
                        <input className="max-sm:h-12 max-sm:text-xl text-sm border border-rat-gray px-3 bg-transparent rounded-full py-2" placeholder="Enter your name" type="text" />
                        <input className="max-sm:h-12 max-sm:text-xl text-sm border border-rat-gray px-3 bg-transparent rounded-full py-2" placeholder="Enter email" type="text" />
                        <Button className="max-sm:h-12 max-sm:text-xl w-full">Submit</Button>
                    </form>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;