import { useEffect, useState } from "react";

interface Props {
    itemsPerPage: number
}

const Slider: React.FC<Props> = ({itemsPerPage}) => {
    const [number, setNumber] = useState(0)
    const [numPages, setNumPages] = useState(1);
    const totalItems = 10;

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
        <section className="w-full relative px-4">
            <div className="w-full overflow-hidden">
                <div id="swiper" className="flex gap-0" style={{width: `calc(100% * ${numPages})`, transition:'transform .5s'}}>                
                        <div className="h-40 rounded-xl border-4 border-white bg-red-500" style={{width: `calc((100% / ${numPages})/ ${itemsPerPage})`}}></div>
                        <div className="h-40 rounded-xl border-4 border-white bg-red-500" style={{width: `calc((100% / ${numPages})/ ${itemsPerPage})`}}></div>
                        <div className="h-40 rounded-xl border-4 border-white bg-red-500" style={{width: `calc((100% / ${numPages})/ ${itemsPerPage})`}}></div>                
                        <div className="h-40 rounded-xl border-4 border-white bg-red-500" style={{width: `calc((100% / ${numPages})/ ${itemsPerPage})`}}></div>                
                        <div className="h-40 rounded-xl border-4 border-white bg-red-500" style={{width: `calc((100% / ${numPages})/ ${itemsPerPage})`}}></div>                                    
                        <div className="h-40 rounded-xl border-4 border-white bg-red-500" style={{width: `calc((100% / ${numPages})/ ${itemsPerPage})`}}></div>                                                                            
                        <div className="h-40 rounded-xl border-4 border-white bg-red-500" style={{width: `calc((100% / ${numPages})/ ${itemsPerPage})`}}></div>                                                                            
                        <div className="h-40 rounded-xl border-4 border-white bg-red-500" style={{width: `calc((100% / ${numPages})/ ${itemsPerPage})`}}></div>                                                                            
                        <div className="h-40 rounded-xl border-4 border-white bg-red-500" style={{width: `calc((100% / ${numPages})/ ${itemsPerPage})`}}></div>                                                                            
                        <div className="h-40 rounded-xl border-4 border-white bg-red-500" style={{width: `calc((100% / ${numPages})/ ${itemsPerPage})`}}></div>                                                                            
                </div>
            </div>
            <button
                onClick={HandleButtonLeft} 
                className="bg-blue-500 rounded-full w-10 h-10 text-white absolute left-0 top-[50%] translate-y-[-50%]"                
            >
                {'<'}
            </button>
            <button
                onClick={HandleButtonRight} 
                className="bg-blue-500 rounded-full w-10 h-10 text-white absolute right-0 top-[50%] translate-y-[-50%]"
            >
                {'>'}
            </button>
        </section>
    );
};

export default Slider;