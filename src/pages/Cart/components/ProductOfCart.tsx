import { ProductCart } from "../../../types/product";
import { FormatPrice } from "../../../utils/FormatPrice";

interface Props {
    product: ProductCart
}

const ProductOfCart: React.FC<Props> = ({product}) => {
    const { title, price, images, brand, categories, amountInCart } = product;

    return (
        <div className="flex bg-white rounded-md overflow-hidden">
            <img 
                src={images[0].src} 
                alt="product" 
                className="w-[50%] aspect-square object-cover object-center p-2 border-r"
            />
            <aside className="flex flex-col w-full">
                <div className="px-3 font-primary text-xl py-3 border-b w-full">
                    <h2>{title}</h2>
                </div>
                <div className="flex flex-col text-sm h-full justify-between px-3 font-secondary">
                    <div className="mt-4 flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <span>Color</span>
                            <span>Negro</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Color</span>
                            <span>Negro</span>
                        </div>
                    </div>
                    <div className="flex mb-4 justify-between items-center">
                        <div className="flex gap-2 border border-brown px-3 py-1 rounded-sm">
                            <button>
                                -
                            </button>
                            <span>{amountInCart}</span>
                            <button>
                                +
                            </button>
                        </div>
                        <span>
                            $ {FormatPrice(price)}
                        </span>
                    </div>
                </div>
                <div className="font-secondary text-sm flex border-t">
                    <button className="w-[50%] py-2 px-1 border-r">View Details</button>
                    <button className="w-[50%] py-2 px-1 ">Delete</button>
                </div>
            </aside>
        </div>
    );
};

export default ProductOfCart;