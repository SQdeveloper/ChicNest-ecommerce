import { Link } from "react-router-dom";
import { ArrowRightIcon, AwardIcon, ShieldIcon, StackIcon, TruckIcon } from "../../components/ui/icons";
import CardBenefits from "./components/CardBenefits";
import Hero from "./components/Hero";
import FeaturedSection from "./components/FeaturedSection";
import BannerSection from "./components/BannerSection";
import InstragramSection from "./components/InstragramSection";
import PromotionSection from "./components/PromotionSection";
import SliderSection from "../../components/SliderSection";

const Home = () => {
    return (
        <>
            <Hero/>
            <div className="px-10">
                <div className="py-16 bg-white">
                    <section className="flex relative py-8 justify-between rounded-md bg-extra-light-gray">
                        <CardBenefits children={<AwardIcon className="style-card-cardBenefits"/>} title="Certified" description="Avaible certificates of authenticy"/>                                                            
                        <div className="bg-light-gray w-[2px]"></div>
                        <CardBenefits children={<ShieldIcon className="style-card-cardBenefits"/>} title="Secure" description="Certified marketplace since 2024"/>                                        
                        <div className="bg-light-gray w-[2px]"></div>
                        <CardBenefits children={<TruckIcon className="style-card-cardBenefits"/>} title="Shipping" description="Free, fast, and reilable worldwide"/>                                        
                        <div className="bg-light-gray w-[2px]"></div>
                        <CardBenefits children={<StackIcon className="style-card-cardBenefits"/>} title="Transparent" description="Hassle-free return policy"/>                                        
                    </section>
                </div>
                <section className="relative flex gap-8 justify-between items-center">
                    <div className="flex gap-4 rounded-md bg-extra-light-gray w-[50%] justify-between items-center">
                        <aside className="font-secondary pl-8 py-6 ">
                            <h3 className="font-primary text-2xl">Luxe Abundance</h3>
                            <p className="mt-2 mb-5 text-rat-gray">Get 20% off with our code: LUXE20</p>
                            <Link className="text-brown flex gap-2" to={''}>
                                View full collection
                                <ArrowRightIcon className="w-4"/>
                            </Link>
                        </aside>
                        <img 
                            className="w-64 h-52 object-cover" 
                            src="https://la.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-anillo-lv-volt-multi-de-oro-blanco--Q9O63D_PM2_Front%20view.png?wid=490&hei=490" 
                            alt="banner" 
                        />
                    </div>
                    <div className="flex gap-4 rounded-md bg-extra-light-gray w-[50%] justify-between items-center">
                        <aside className="font-secondary pl-8 py-6 ">
                            <h3 className="font-primary text-2xl">Luxe Abundance</h3>
                            <p className="mt-2 mb-5 text-rat-gray">Get 20% off with our code: LUXE20</p>                        
                            <Link className="text-brown flex gap-2" to={''}>
                                View full collection
                                <ArrowRightIcon className="w-4"/>
                            </Link>
                        </aside>
                        <img 
                            className="w-64 h-52 object-cover" 
                            src="https://la.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-anillo-lv-volt-multi-de-oro-blanco--Q9O63D_PM2_Front%20view.png?wid=490&hei=490" 
                            alt="banner" 
                        />
                    </div>
                </section>
                <SliderSection/>
                <FeaturedSection/>
                <PromotionSection/>
            </div>            
            <BannerSection/>
            <InstragramSection/>            
        </>        
    );
};

export default Home;