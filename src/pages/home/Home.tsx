import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../../components/ui/icons";
import Hero from "./components/Hero";
import FeaturedSection from "./components/FeaturedSection";
import BannerSection from "./components/BannerSection";
import InstragramSection from "../../components/InstragramSection";
import PromotionSection from "./components/PromotionSection";
import SliderSection from "../../components/SliderSection";
import BenefitsSection from "../../components/BenefitsSection";
import { useProducts } from "../../contexts/products";
import { useEffect, useState } from "react";

const Home = () => {
    const { products } = useProducts();        
    const [itemsPerPage, setItemsPerPage] = useState(5);

    //Cambiamos la cantidad de items por página a mostar en el slider
    useEffect(()=>{
        const x = innerWidth;
            if(x <= 600) return setItemsPerPage(1);
            if(x <= 900) return setItemsPerPage(3);
            if(x <= 1280) return setItemsPerPage(4);

        window.addEventListener('resize', ()=>{
            const x = innerWidth;
            if(x <= 600) return setItemsPerPage(1);
            if(x <= 900) return setItemsPerPage(3);
            if(x <= 1280) return setItemsPerPage(4);
        })
    },[])

    return (
        <>
            <Hero/>
            <div className="max-sm:px-5 max-w-[1280px] mx-auto px-10 text-dark-gray">
                <div className="max-sm:py-2 max-[800px]:py-10 max-xl:py-12 py-16 bg-white">
                    <BenefitsSection/>
                </div>
                <section className="max-[800px]:flex-col relative flex gap-8 justify-between items-center">
                    <div className="max-sm:flex-col max-[800px]:w-full flex gap-4 rounded-md bg-extra-light-gray w-[50%] justify-between items-center">
                        <aside className="font-secondary max-sm:pl-0 pl-8 py-6 max-sm:text-center">
                            <h3 className="max-sm:text-3xl font-primary text-2xl">Luxe Abundance</h3>
                            <p className="max-sm:text-[18px] mt-4 mb-5 text-rat-gray">Get 20% off with our code: LUXE20</p>
                            <Link className="max-sm:mx-auto max-sm:w-fit max-sm:text-[18px] text-brown flex gap-2" to={'/shop'}>
                                View full collection
                                <ArrowRightIcon className="w-4"/>
                            </Link>
                        </aside>
                        <img 
                            className="w-64 h-52 object-cover" 
                            src="../../src/assets/images/collar1.webp" 
                            alt="banner" 
                        />
                    </div>
                    <div className="max-sm:flex-col max-[800px]:w-full flex gap-4 rounded-md bg-extra-light-gray w-[50%] justify-between items-center">
                        <aside className="font-secondary max-sm:pl-0 pl-8 py-6 max-sm:text-center">
                            <h3 className="max-sm:text-3xl font-primary text-2xl">Sparkle in Love</h3>
                            <p className="max-sm:text-[18px] mt-4 mb-5 text-rat-gray">Make her say yes with our 50% off rings</p>                        
                            <Link className="max-sm:mx-auto max-sm:w-fit max-sm:text-[18px] text-brown flex gap-2" to={'/shop'}>
                                View full collection
                                <ArrowRightIcon className="w-4"/>
                            </Link>
                        </aside>
                        <img 
                            className="w-64 h-52 object-cover" 
                            src="../../src/assets/images/collar2.webp" 
                            alt="banner" 
                        />
                    </div>
                </section>                
                <SliderSection itemsPerPage={itemsPerPage} products={products.slice(0,10)}/>                             
                <FeaturedSection/>
                <PromotionSection/>
            </div>            
            <BannerSection/>
            <div className="max-w-[1180px] mx-auto max-sm:mx-5 max-xl:my-12 mb-12 mt-16">
                <InstragramSection/>
            </div>     
        </>        
    );
};

export default Home;