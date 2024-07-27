import { ArrowRightIcon } from "../../../components/ui/icons";

const CardFeaturedProduct = () => {
    return (
        <aside className="font-secondary bg-[#F1F1F1] rounded-md overflow-hidden">
            <img 
                src="https://www.joyeriamurguia.com/1751-home_default/dije-ojo-turco-lila.jpg" alt="product" 
                className="w-full h-auto object-cover"
            />
            <div className="justify-between bg-white px-2 py-2 mb-1 mx-1 rounded-sm flex gap-2 items-start">
                <div className="text-sm font-bold">
                    <h4 className="text-rat-gray mb-2">Copper Gold Plated</h4>
                    <div className="flex gap-2 items-center">
                        <span>$ 195.00</span>                                
                        <span className="text-xs mb-[2px] text-light-gray">$ 100.00 USD</span>
                    </div>
                </div>
                <ArrowRightIcon className="rounded-full p-1 border border-brown w-6 text-brown"/>
            </div>
        </aside>                    
    );
};

export default CardFeaturedProduct;