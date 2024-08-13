import { Link } from "react-router-dom";
import { Product } from "../types/product";
import { calculateDiscount } from "../utils/CalculateDiscount";
import { CartFillIcon, StarIcon } from "./ui/icons";
import { FormatPrice } from "../utils/FormatPrice";
import { Toaster } from "sonner";
import { saveToCart } from "../utils/SaveProductToCart";
import { useProducts } from "../contexts/products";

const CardProduct = ({product}: {product: Product}) => {
    const { isOffer, price, priceOffer, title, images } = product;    
    const { productsCart, setProductsCart } = useProducts();

    const handleAddToCart = ()=>{
        saveToCart(product, productsCart, setProductsCart);
    }

    return (
        <div className="font-secondary relative flex flex-col items-center px-1 justify-between bg-extra-light-gray rounded-md overflow-hidden">
            <Toaster/>            
            {
                isOffer &&
                <div className="rounded-full px-4 text-sm font-secondary py-1 absolute top-4 left-4 bg-brown text-white">
                    - {calculateDiscount(price, priceOffer)} %
                </div>
            }
            <Link to={`/details/${product.id}`} className="w-full h-auto" >
                <img 
                    src={images[0].src} alt="product" 
                    className="w-[70%] mx-auto object-cover"
                />
            </Link>
            <div className="justify-between bg-white px-2 py-3 w-full mb-1 rounded-sm flex gap-2 items-start">
                <div className="max-[1024px]:text-xl text-sm font-bold">
                    <h4 className="max-[1024px]:mb-3 text-rat-gray mb-2">{title}</h4>
                    <div className="flex gap-2 items-center">
                        <span>$ {FormatPrice(price)}</span>                                
                        {
                            isOffer && <span className="max-[1024px]:text-sm text-xs mb-[2px] text-light-gray">$ {FormatPrice(priceOffer)} USD</span>
                        }                                    
                    </div>
                </div>
                <div className="max-[1024px]:gap-3 flex flex-col gap-1 items-end font-secondary">
                    <div className="max-[1024px]:text-xl text-sm text-dark-gray font-bold flex gap-1">
                        <span>4.5</span>
                        <StarIcon className="max-[1024px]:h-6 h-4 text-yellow-500"/>
                    </div>
                    <button  
                        className="group hover:bg-brown transition-all flex justify-center w-fit items-center border border-brown rounded-full"
                        onClick={handleAddToCart}
                    >
                        <CartFillIcon className="max-[1024px]:w-8 max-[1024px]:h-8 text-brown transition-all group-hover:text-white w-6 h-6 p-1.5"/>
                    </button>
                </div>                
            </div>
        </div>   
    );
};

export default CardProduct;