import { ChangeEvent, useEffect, useState } from "react";
import BenefitsSection from "../../components/BenefitsSection";
import CardProduct from "../../components/CardProduct";
import Checkbox from "../../components/Checkbox";
import HeaderBreadcrumb from "../../components/HeaderBreadcrumb";
import InstragramSection from "../../components/InstragramSection";
import InputSearch from "../../components/ui/InputSearch";
import { ButtonLeft, ButtonRight } from "../../components/ui/Slider";
import { Product } from "../../types/product";
import useFilters from "./hooks/useFilters";
import useDebounce from "../../hooks/useDebounce";

const Shop = () => {
    const [productsToShow, setProductsToShow] = useState<Product[]>();
    const [page, setPage] = useState(1);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedTitle, setSelectedTitle] = useState('');
    const debounceText = useDebounce(selectedTitle, 400);    
    const { filteredProducts } = useFilters(selectedCategories, selectedBrands, debounceText);
    const [numPages, setNumPages] = useState<number>(0);

    useEffect(()=>{        
        //10 by 10 separation by pagination
        if(!filteredProducts) return;
        const list = filteredProducts.slice((page - 1)*10, 10*(page));        
        setProductsToShow(list);

        //We calculate the number pages.
        const result = Math.ceil(filteredProducts.length / 10);
        setNumPages(result)
    }, [page, filteredProducts])        

    const handleChangeCategories = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, checked} = event.target;

        if(checked) {
            setSelectedCategories(prev => [...prev, name])
        }else {            
            setSelectedCategories(prev => {                            
                const list = prev.filter(_name => _name != name);                                
                return list;
            })
        }
    }

    const handleClickArrowLeft = ()=> {        
        setPage(prev => prev - 1);
    }

    const handleClickArrowRight = ()=> {
        setPage(prev => prev + 1);
    }

    const handleSearch = (e: ChangeEvent<HTMLInputElement>)=>{
        const text = e.target.value;
        if(text === ' ') return e.target.value = '';
        console.log(text)
        setSelectedTitle(text);
    }

    const handleChangeBrands = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, checked} = event.target;

        if(checked) {
            setSelectedBrands(prev => [...prev, name])
        }else {            
            setSelectedBrands(prev => {                            
                const list = prev.filter(_name => _name != name);                                
                return list;
            })
        }
    }

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
                                <Checkbox onChange={handleChangeCategories} name="women" text="Women" htmlFor="women"/>                                
                                <Checkbox onChange={handleChangeCategories} name="earrings" text="Earrings" htmlFor="earrings"/>                                
                                <Checkbox onChange={handleChangeCategories} name="bracelet" text="Bracelet" htmlFor="bracelet"/>                                
                                <Checkbox onChange={handleChangeCategories} name="kids" text="Kids" htmlFor="Kids"/>                                
                                <Checkbox onChange={handleChangeCategories} name="gold" text="Gold" htmlFor="Gold"/>                                
                                <Checkbox onChange={handleChangeCategories} name="rings" text="Rings" htmlFor="Rings"/>                                
                            </form>
                        </aside>
                        <aside className="mt-6 w-full">
                            <h2 className="camelcase mb-2 font-primary text-xl">Brand by category</h2>
                            <form className="w-full">                                
                                <Checkbox onChange={handleChangeBrands} name="Boucheron" text="Boucheron" htmlFor="Boucheron"/>                                                            
                                <Checkbox onChange={handleChangeBrands} name="Mikimoyo" text="Mikimoyo" htmlFor="Mikimoyo"/>                                                            
                                <Checkbox onChange={handleChangeBrands} name="Porrellano" text="Porrellano" htmlFor="Porrellano"/>                                                            
                                <Checkbox onChange={handleChangeBrands} name="Tiffany" text="Tiffany" htmlFor="Tiffany"/>                                                            
                                <Checkbox onChange={handleChangeBrands} name="Bucellars" text="Bucellars" htmlFor="Bucellars"/>                                                            
                            </form>
                        </aside>
                    </div>
                    <div className="flex flex-col gap-8 col-span-4">
                        <div className="flex justify-between w-full">
                            <InputSearch onChange={handleSearch} className="w-[325px]" placeholder="Search for products..."/>
                            <div className="flex gap-4">
                                <ButtonLeft 
                                    disabled={page === 1 && true}
                                    className={`${page === 1 && 'cursor-not-allowed opacity-[30%] hover:bg-transparent hover:text-brown'}`} 
                                    HandleButtonLeft={handleClickArrowLeft}
                                    />
                                <ButtonRight
                                    disabled={page === numPages && true}
                                    className={`${page === numPages && 'cursor-not-allowed opacity-[30%] hover:bg-transparent hover:text-brown'}`} 
                                    HandleButtonRight={handleClickArrowRight}
                                />
                            </div>
                        </div>
                        <div className="grid-products gap-3">
                            {
                                productsToShow?.map(product => (
                                    <CardProduct key={product.id} product={product}/>
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