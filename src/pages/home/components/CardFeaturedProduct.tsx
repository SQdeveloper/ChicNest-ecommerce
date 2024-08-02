import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../../../components/ui/icons";
import { Product } from "../../../types/product";
import { calculateDiscount } from "../../../utils/CalculateDiscount";

interface Props {
    product: Product
}

const CardFeaturedProduct: React.FC<Props> = ({product}) => {
    const { isOffer, priceOffer, price, title, images } = product;

    return (
        <Link to={`/details/${product.id}`} className="font-secondary relative flex flex-col items-center px-1 justify-between bg-extra-light-gray rounded-md overflow-hidden">
            {
                isOffer &&
                <div className="rounded-full px-4 text-sm font-secondary py-1 absolute top-4 left-4 bg-brown text-white">
                    - {calculateDiscount(price, priceOffer)} %
                </div>
            }
            <img 
                src={images[0].src} alt="product" 
                className="w-[70%] h-auto object-cover"
            />
            <div className="justify-between bg-white px-2 py-3 w-full mb-1 rounded-sm flex gap-2 items-start">
                <div className="text-sm font-bold">
                    <h4 className="text-rat-gray mb-2">{title}</h4>
                    <div className="flex gap-2 items-center">
                        <span>$ {price}</span>                                
                        {
                            isOffer && <span className="text-xs mb-[2px] text-light-gray">$ {priceOffer} USD</span>
                        }                                    
                    </div>
                </div>
                <ArrowRightIcon className="rounded-full p-1 border border-brown w-6 text-brown"/>
            </div>
        </Link>                    
    );
};

export default CardFeaturedProduct;