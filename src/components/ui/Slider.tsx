import { useEffect, useState } from "react";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "./icons";
import { Product } from "../../types/product";
import { Link } from "react-router-dom";
import { calculateDiscount } from "../../utils/CalculateDiscount";
import { FormatPrice } from "../../utils/FormatPrice";

interface Props {
    itemsPerPage: number,
    items: Product[];
}

export const ButtonRight = ({HandleButtonRight, className, disabled}: {disabled?:boolean, HandleButtonRight: ()=>void, className?: string})=>{
    return(        
        <button
            onClick={HandleButtonRight} 
            className={`${className} hover:bg-brown transition-all hover:text-white text-dark-gray flex justify-center items-center border border-brown bg-extra-light-gray rounded-full w-9 h-9`}
            disabled={disabled}
            >
            <ChevronRightIcon className="w-5 h-5 "/>                
        </button>
    )
}

export const ButtonLeft = ({HandleButtonLeft, className, disabled}: {disabled?:boolean, HandleButtonLeft: ()=>void, className?: string})=>{
    return(
        <button
            onClick={HandleButtonLeft} 
            className={`${className} hover:bg-brown transition-all hover:text-white text-dark-gray flex justify-center items-center border border-brown bg-extra-light-gray rounded-full w-9 h-9`}                
            disabled={disabled}
        >
            <ChevronLeftIcon className="w-5 h-5 "/>
        </button>
    )
}

const Slider: React.FC<Props> = ({itemsPerPage, items}) => {
    const [number, setNumber] = useState(0)
    const [numPages, setNumPages] = useState(1);
    const totalItems = items.length;

    //Obtenemos el total de páginas
    useEffect(()=>{        
        const result = totalItems / itemsPerPage;

        setNumPages(Math.ceil(result))
    },[items])

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
        <section className="w-full relative px-3">
            <div className="w-full overflow-hidden">
                <div id="swiper" className="flex gap-0" style={{width: `calc(100% * ${numPages})`, transition:'transform .5s'}}>                
                    {
                        items.map((product, index)=>(
                            <Link to={`/details/${product.id}`}
                                key={index} 
                                className="rounded-xl border-4 border-white bg-extra-light-gray font-secondary relative flex flex-col items-center px-1 justify-between overflow-hidden" 
                                style={{width: `calc((100% / ${numPages})/ ${itemsPerPage})`}}
                            >
                                {
                                    product.isOffer &&
                                    <div className="rounded-full px-4 text-sm font-secondary py-1 absolute top-3 left-3 bg-brown text-white">
                                        - {calculateDiscount(product.price, product.priceOffer)} %
                                    </div>
                                }
                                <img 
                                    src={product.images[0].src} alt="product" 
                                    className="w-[75%] h-auto object-cover"
                                />
                                <div className="justify-between bg-white px-2 py-3 w-full mb-1 rounded-sm flex gap-2 items-start">
                                    <div className="max-lg:text-xl text-sm font-bold">
                                        <h4 className="text-rat-gray mb-2">{product.title}</h4>
                                        <div className="flex gap-2 items-center">
                                            <span>$ {FormatPrice(product.price)}</span>                                
                                            {
                                                product.isOffer && <span className="max-lg:text-sm text-xs mb-[2px] text-light-gray">$ {FormatPrice(product.priceOffer)} USD</span>
                                            }                                    
                                        </div>
                                    </div>
                                    <ArrowRightIcon className="max-lg:w-8 rounded-full p-1 border border-brown w-6 text-brown"/>
                                </div>
                            </Link>                                                                                                                                                                        
                        ))
                    }
                </div>  
            </div>
            <ButtonLeft 
                disabled={number === 0} 
                className={`max-sm:w-10 max-sm:h-10 ${number === 0 && 'hidden'} absolute left-0 top-[50%] translate-y-[-50%]`}
                HandleButtonLeft={HandleButtonLeft}
            />
            <ButtonRight 
                disabled={number === totalItems - itemsPerPage} 
                className={`max-sm:w-10 max-sm:h-10 ${number === totalItems - itemsPerPage && 'hidden'} absolute right-0 top-[50%] translate-y-[-50%]`}
                HandleButtonRight={HandleButtonRight}
            />
        </section>
    );
};

export default Slider;