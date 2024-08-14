import { useNavigate, useParams } from "react-router-dom";
import BenefitsSection from "../../components/BenefitsSection";
import SliderSectionType2 from "../../components/SliderSectionType2";
import { ArrowLeftDown, ChevronListIcon } from "../../components/ui/icons";
import { useProducts } from "../../contexts/products";
import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import HeaderBreadcrumb from "../../components/HeaderBreadcrumb";
import ClientsSection from "../../components/ClientsSection";
import { saveToCart } from "../../utils/SaveProductToCart";
import { Toaster } from "sonner";

const DetailsProduct = () => {
    const { products, productsCart, setProductsCart } = useProducts();
    const items = products.slice(0,10);    
    const { id } = useParams();
    const [product, setProduct] = useState<Product>();        
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const togo = useNavigate();

    //Cambiamos la cantidad de items por página a mostar en el slider
    useEffect(()=>{
        const x = innerWidth;
            if(x <= 600) return setItemsPerPage(1);
            if(x <= 768) return setItemsPerPage(2);
            if(x <= 900) return setItemsPerPage(3);
            if(x <= 1280) return setItemsPerPage(4);
            if(x > 1280) return setItemsPerPage(5)                          
    },[])

    useEffect(()=>{
        const result = products.find(_product => _product.id === Number(id));
        setProduct(result);
    }, [id]);

    const handleShopNow = ()=>{
        if(product) saveToCart(product, productsCart, setProductsCart);
        togo('/cart')
    }

    return (
        <div className="mb-12">
            <Toaster/>
            <HeaderBreadcrumb direction="Shop / Product details"/>
            <div className="max-sm:mx-5 max-[1280px]:mx-10 max-w-[1280px] mx-auto">
                <div className="max-lg:gap-10 max-lg:flex-col mt-12 w-full flex gap-8 items-center">
                    <div className="max-sm:h-auto max-sm:flex max-sm:flex-col max-lg:gap-4 max-lg:w-full w-[50%] h-[600px] grid grid-cols-3 gap-2 grid-rows-4">
                        <div className="max-sm:aspect-[7/5] flex justify-center items-center bg-extra-light-gray w-full h-full rounded-md row-span-3 col-span-3">
                            <img 
                                className="overflow-hidden w-[70%] object-cover object-center" 
                                src={product?.images[0].src} 
                                alt="product" 
                            />
                        </div>
                        <img 
                            className="max-sm:aspect-[7/5] overflow-hidden max-sm: bg-extra-light-gray w-full h-full rounded-md object-cover object-center " 
                            src={product?.images[1].src} 
                            alt="product" 
                        />
                        <img 
                            className="max-sm:aspect-[7/5] overflow-hidden bg-extra-light-gray w-full h-full rounded-md object-cover object-center " 
                            src={product?.images[2].src} 
                            alt="product" 
                        />
                        <img 
                            className="max-sm:aspect-[7/5] overflow-hidden bg-extra-light-gray w-full h-full rounded-md object-cover object-center " 
                            src={product?.images[1].src} 
                            alt="product" 
                        />
                    </div>
                    <aside className="max-lg:w-full font-secondary w-[50%] flex flex-col justify-center">
                        <h2 className="max-sm:text-5xl text-4xl font-primary text-dark-gray">{product?.title}</h2>
                        <p className="max-sm:text-xl text-rat-gray mt-4 mb-5">{product?.description}</p>
                        <button  
                            onClick={handleShopNow}
                            className="max-sm:text-xl group relative shadow block font-secondary text-sm w-fit text-white"
                        >
                            <div className="group-hover:-translate-x-[2px] group-hover:-translate-y-[2px] transition-all bg-brown z-20 flex gap-1 text-nowrap px-6 py-2 text-transparent rounded-[3px] justify-center items-center">
                                <span>Shop Now</span>
                                <ArrowLeftDown/>
                            </div>
                            <div className="group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all absolute z-30 gap-1 top-[4px] left-[5px] w-full border border-light-brown rounded-[3px] bg-brown h-full flex justify-center items-center">
                                <span>Shop Now</span>                
                                <ArrowLeftDown className="w-3.5"/>
                            </div>            
                        </button>
                        <div className="max-sm:text-xl flex flex-col gap-3 mt-8">                            
                            <div className="flex gap-1 text-dark-gray">
                                <strong>Price:</strong>
                                <span>${product?.price}</span>
                            </div>                    
                            <div className="flex gap-1 text-dark-gray">
                                <strong>Product Number:</strong>
                                <span>{product?.product_number}</span>
                            </div>                    
                            <div className="flex gap-1 text-dark-gray">
                                <strong>Category:</strong>
                                <span>{product?.categories}</span>
                            </div>                    
                            <div className="flex gap-1 text-dark-gray">
                                <strong>Stock:</strong>
                                <span>{product?.stock}</span>
                            </div>                    
                            <div className="flex gap-1 text-dark-gray">
                                <strong>Brand:</strong>
                                <span>{product?.brand}</span>
                            </div>                    
                        </div>
                    </aside>
                </div>
                <div className="max-lg:mt-5 mt-12 text-dark-gray">
                    <BenefitsSection/>  
                </div>
                <section className="max-lg:mt-5 font-secondary mt-12 text-dark-gray">
                    <h2 className="max-sm:text-[45px] leading-[50px] max-sm:mb-4 mb-2 text-3xl font-primary">Product Description</h2>
                    <p className="max-sm:text-xl">{product?.description}</p>
                    <ul className="max-sm:text-xl mt-6 flex flex-col gap-4">
                        <li className="flex gap-2 max-sm:items-start">
                            <ChevronListIcon className="max-sm:mt-1 max-sm:w-5 w-4 text-brown"/>
                            <div className="flex gap-2 flex-1 max-sm:flex-col">
                                <strong>Rings:</strong>
                                <p>Rings are circular bands that are worn on the finger.</p>
                            </div>
                        </li>
                        <li className="flex gap-2 max-sm:items-start">
                            <ChevronListIcon className="max-sm:mt-1 max-sm:w-5 w-4 text-brown"/>
                            <div className="flex gap-2 flex-1 max-sm:flex-col">
                                <strong>Earrings:</strong>
                                <p>Earrings are worn on the ears and come in a wide variety of styles.</p>
                            </div>
                        </li>
                        <li className="flex gap-2 max-sm:items-start">
                            <ChevronListIcon className="max-sm:mt-1 max-sm:w-5 w-4 text-brown"/>
                            <div className="flex gap-2 flex-1 max-sm:flex-col">
                                <strong>Necklaces:</strong>
                                <p>Necklaces are worn around the neck and be short.</p>
                            </div>
                        </li>
                        <li className="flex gap-2 max-sm:items-start">
                            <ChevronListIcon className="max-sm:mt-1 max-sm:w-5 w-4 text-brown"/>
                            <div className="flex gap-2 flex-1 max-sm:flex-col">
                                <strong>Bracelet:</strong>
                                <p>Bracelet are worn around the wirst and can be made of metal.</p>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="max-sm:mt-12 mt-8 font-secondary text-dark-gray">
                    <h2 className="leading-[45px] max-sm:text-[45px] font-primary text-3xl">Product materials</h2>
                    <p className="max-sm:mt-5 max-sm:text-xl mt-2">In jewelry making, a variety of materials are used to create stunning pieces. Precious metals like gold, silver, and platinum are foundational. Gold, valued for its rarity and luster, can be alloyed into yellow, white, and rose gold. Silver, often used in its sterling form (92.5% silver), is known for its bright appearance. Platinum is prized for its durability and resistance to tarnish.</p>
                </section>
                <div className="mt-10">
                    <ClientsSection/>
                </div>
                <SliderSectionType2 items={items} itemsPerPage={itemsPerPage}/>
            </div>
        </div>
    );
};

export default DetailsProduct;