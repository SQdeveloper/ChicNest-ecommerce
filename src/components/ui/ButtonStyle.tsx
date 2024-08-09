import { Link } from "react-router-dom";
import { ArrowLeftDown } from "./icons";

const ButtonStyle = () => {
    return (
        <Link  
            to='/shop'
            className="group relative shadow block font-secondary text-sm w-fit text-white"
        >
            <div className="group-hover:-translate-x-[2px] group-hover:-translate-y-[2px] transition-all bg-brown z-20 flex gap-1 text-nowrap px-6 py-2 text-transparent rounded-[3px] justify-center items-center">
                <span>Shop Now</span>
                <ArrowLeftDown/>
            </div>
            <div className="group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all absolute z-30 gap-1 top-[4px] left-[5px] w-full border border-light-brown rounded-[3px] bg-brown h-full flex justify-center items-center">
                <span>Shop Now</span>                
                <ArrowLeftDown className="w-3.5"/>
            </div>            
        </Link>
    );
};

export default ButtonStyle;