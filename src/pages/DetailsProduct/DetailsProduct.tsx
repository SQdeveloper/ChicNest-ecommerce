import BenefitsSection from "../../components/BenefitsSection";
import SliderSectionType2 from "../../components/SliderSectionType2";
import ButtonStyle from "../../components/ui/ButtonStyle";
import { ChevronListIcon } from "../../components/ui/icons";
import { useProducts } from "../../contexts/products";

const DetailsProduct = () => {
    const { products } = useProducts();
    const items = products.slice(0,10)

    return (
        <div>
            <section className="flex justify-center items-center text-center w-full h-56 bg-cover bg-center bg-no-repeat bg-header">
                <h2 className="text-white text-3xl font-primary">Home / Shop / Product details</h2>
            </section>
            <div className="mx-10">
                <div className="mt-12 w-full flex gap-8 items-center">
                    <div className="w-[50%] h-[600px] grid grid-cols-3 gap-2 grid-rows-4">
                        <img className="w-full h-full rounded-md row-span-3 object-cover object-center col-span-3" src="../../src/assets/images/collar.jpg" alt="product" />
                        <img className="w-full h-full rounded-md object-cover object-center " src="../../src/assets/images/collar.jpg" alt="product" />
                        <img className="w-full h-full rounded-md object-cover object-center " src="../../src/assets/images/collar.jpg" alt="product" />
                        <img className="w-full h-full rounded-md object-cover object-center " src="../../src/assets/images/collar.jpg" alt="product" />
                    </div>
                    <aside className="font-secondary w-[50%] flex flex-col justify-center">
                        <h2 className="text-4xl font-primary text-dark-gray">Vintage Cuff Ring</h2>
                        <p className="text-rat-gray mt-4 mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ipsum quod unde vel fugit pariatur odio voluptate ullam dignissimos consequatur, vero ducimus voluptatibus dolorum inventore porro amet necessitatibus vitae hic!</p>
                        <ButtonStyle/>
                        <div className="flex flex-col gap-3 mt-8">                            
                            <div className="flex gap-1 text-dark-gray">
                                <strong>Price:</strong>
                                <span>$79.43</span>
                            </div>                    
                            <div className="flex gap-1 text-dark-gray">
                                <strong>Product Number:</strong>
                                <span>534333439535</span>
                            </div>                    
                            <div className="flex gap-1 text-dark-gray">
                                <strong>Category:</strong>
                                <span>Ring</span>
                            </div>                    
                            <div className="flex gap-1 text-dark-gray">
                                <strong>Stock:</strong>
                                <span>24</span>
                            </div>                    
                            <div className="flex gap-1 text-dark-gray">
                                <strong>Brand:</strong>
                                <span>Tiffany</span>
                            </div>                    
                        </div>
                    </aside>
                </div>
                <div className="mt-12 text-dark-gray">
                    <BenefitsSection/>  
                </div>
                <section className="font-secondary mt-12 text-dark-gray">
                    <h2 className="mb-2 text-3xl font-primary">Product Description</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eius dignissimos, eum laudantium rem vero facere enim corrupti sapiente minima maxime sequi ab vel repudiandae, nobis voluptatibus consectetur, eligendi porro?</p>
                    <ul className="mt-6 flex flex-col gap-4">
                        <li className="flex gap-2">
                            <ChevronListIcon className="w-4 text-brown"/>
                            <strong>Rings:</strong>
                            <p>Rings are circular bands that are worn on the finger.</p>
                        </li>
                        <li className="flex gap-2">
                            <ChevronListIcon className="w-4 text-brown"/>
                            <strong>Earrings:</strong>
                            <p>Earrings are worn on the ears and come in a wide variety of styles.</p>
                        </li>
                        <li className="flex gap-2">
                            <ChevronListIcon className="w-4 text-brown"/>
                            <strong>Necklaces:</strong>
                            <p>Necklaces are worn around the neck and be short.</p>
                        </li>
                        <li className="flex gap-2">
                            <ChevronListIcon className="w-4 text-brown"/>
                            <strong>Bracelet:</strong>
                            <p>Bracelet are worn around the wirst and can be made of metal.</p>
                        </li>
                    </ul>
                </section>
                <section className="mt-8 font-secondary text-dark-gray">
                    <h2 className="font-primary text-3xl">Product materials</h2>
                    <p className="mt-2">In jewelry making, a variety of materials are used to create stunning pieces. Precious metals like gold, silver, and platinum are foundational. Gold, valued for its rarity and luster, can be alloyed into yellow, white, and rose gold. Silver, often used in its sterling form (92.5% silver), is known for its bright appearance. Platinum is prized for its durability and resistance to tarnish.</p>
                </section>
                <section className="font-secondary text-center bg-extra-light-gray mt-10 rounded-md text-dark-gray p-10">
                    <h2 className="w-[450px] leading-[50px] text-center mx-auto text-4xl font-primary">Hear from Those Whose Lives We've Touched</h2>
                    <div className="mt-7 flex gap-2 h-[500px]">
                        <div className="h-full effect-image w-full flex flex-col">
                            <img className="rounded-md overflow-hidden w-full object-cover object-center" src="../../src/assets/images/collar.jpg" alt="testimony" />
                            <h3 className="mt-4 mb-1 font-bold">Sana Anwar</h3>
                            <span>Branch Manager</span>
                        </div>
                        <div className="h-full effect-image w-full flex flex-col">
                            <img className="rounded-md overflow-hidden w-full object-cover object-center" src="../../src/assets/images/collar.jpg" alt="testimony" />
                            <h3 className="mt-4 mb-1 font-bold">Sana Anwar</h3>
                            <span>Branch Manager</span>
                        </div>
                        <div className="h-full effect-image w-full flex flex-col">
                            <img className="rounded-md overflow-hidden w-full object-cover object-center" src="../../src/assets/images/collar.jpg" alt="testimony" />
                            <h3 className="mt-4 mb-1 font-bold">Sana Anwar</h3>
                            <span>Branch Manager</span>
                        </div>
                    </div>
                </section>
                <SliderSectionType2 items={items} itemsPerPage={5}/>
            </div>
        </div>
    );
};

export default DetailsProduct;