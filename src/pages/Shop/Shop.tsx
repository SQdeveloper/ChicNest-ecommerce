import BenefitsSection from "../../components/BenefitsSection";
import CardProduct from "../../components/CardProduct";
import Checkbox from "../../components/Checkbox";
import HeaderBreadcrumb from "../../components/HeaderBreadcrumb";
import InstragramSection from "../../components/InstragramSection";
import InputSearch from "../../components/ui/InputSearch";
import { ButtonLeft, ButtonRight } from "../../components/ui/Slider";
import { useProducts } from "../../contexts/products";

const Shop = () => {
    const { products } = useProducts();

    return (
        <div>
            <HeaderBreadcrumb direction="Shop" />
            <div className="mt-12 mx-10">
                <BenefitsSection/>
                <div className="grid grid-cols-5 mt-10 gap-8">
                    <div className="font-secondary">
                        <aside>
                            <h2 className="camelcase mb-2 font-primary text-xl">Product by category</h2>
                            <form className="w-full">
                                <Checkbox text="Women" htmlFor="women"/>                                
                                <Checkbox text="Earrings" htmlFor="earrings"/>                                
                                <Checkbox text="Bracelet" htmlFor="bracelet"/>                                
                                <Checkbox text="Kids" htmlFor="Kids"/>                                
                                <Checkbox text="Gold" htmlFor="Gold"/>                                
                                <Checkbox text="Rings" htmlFor="Rings"/>                                
                            </form>
                        </aside>
                        <aside className="mt-6 w-full">
                            <h2 className="camelcase mb-2 font-primary text-xl">Brand by category</h2>
                            <form className="w-full">
                                <Checkbox text="Boucheron" htmlFor="Boucheron"/>                                                            
                                <Checkbox text="Mikimoyo" htmlFor="Mikimoyo"/>                                                            
                                <Checkbox text="Porrellano" htmlFor="Porrellano"/>                                                            
                                <Checkbox text="Tiffany" htmlFor="Tiffany"/>                                                            
                                <Checkbox text="Bucellars" htmlFor="Bucellars"/>                                                            
                            </form>
                        </aside>
                    </div>
                    <div className="flex flex-col gap-8 col-span-4">
                        <div className="flex justify-between w-full">
                            <InputSearch className="w-[325px]" placeholder="Search for products..."/>
                            <div className="flex gap-4">
                                <ButtonLeft HandleButtonLeft={()=>{}}/>
                                <ButtonRight HandleButtonRight={()=>{}}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {
                                products.map(product => (
                                    <CardProduct product={product}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <InstragramSection/>
        </div>
    );
};

export default Shop;