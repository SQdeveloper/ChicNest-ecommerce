import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./ui/icons";
import { Product } from "../types/product";
import { Link } from "react-router-dom";

interface Props {
    itemsPerPage: number,
    items: Product[];
}

const SliderSectionType2: React.FC<Props> = ({itemsPerPage, items}) => {
    const [number, setNumber] = useState(0)
    const [numPages, setNumPages] = useState(1);
    const totalItems = items.length;

    //Obtenemos el total de páginas
    useEffect(()=>{
        const result = totalItems / itemsPerPage;

        setNumPages(Math.ceil(result))
    },[])

    const moveSlider = ()=>{
        const swiper = document.getElementById('swiper');        

        if(swiper) {
            swiper.style.transform = `translateX(calc(((-100% / ${numPages}) / ${itemsPerPage} * ${number})))`;
        }
    }
    
    const HandleButtonLeft = ()=>{
        if(number === 0) return;
        setNumber(prev=>prev - 1)
    }
    
    const HandleButtonRight = ()=>{
        if(number === totalItems - itemsPerPage) return;
        setNumber(prev=>prev + 1)        
    }
    
    useEffect(()=>{
        moveSlider()
    }, [number])
    
    return (
        <section className="w-full mt-10 text-dark-gray">
            <div className="flex justify-between gap-6">
                <h2 className="text-3xl font-primary mb-5">Related Products</h2>
                <div className="flex gap-4">
                    <button
                    onClick={HandleButtonLeft} 
                    className="hover:bg-brown transition-all hover:text-white text-dark-gray flex justify-center items-center border border-brown bg-extra-light-gray rounded-full w-8 h-8"                
                    >
                        <ChevronLeftIcon className="w-5 h-5 "/>
                    </button>
                    <button
                        onClick={HandleButtonRight} 
                        className="hover:bg-brown transition-all hover:text-white text-dark-gray flex justify-center items-center border border-brown bg-extra-light-gray rounded-full w-8 h-8"
                        >
                        <ChevronRightIcon className="w-5 h-5 "/>                
                    </button>
                </div>
            </div>
            <div className="w-full overflow-hidden">
                <div id="swiper" className="flex gap-0" style={{width: `calc(100% * ${numPages})`, transition:'transform .5s'}}>                
                    {
                        items.map((product, index)=>(
                            <Link to={`/details/${product.id}`}
                                key={index} 
                                className="aspect-square rounded-xl border-4 border-white bg-extra-light-gray" 
                                style={{width: `calc((100% / ${numPages})/ ${itemsPerPage})`}}
                            >
                                <img src={product.images[0].src} alt="product image" />
                            </Link>                                                    
                        ))
                    }
                </div>
            </div>            
        </section>
    );
};

export default SliderSectionType2;