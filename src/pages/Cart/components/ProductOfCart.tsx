import { MinusIcon, PlusIcon } from "../../../components/ui/icons";
import { ProductCart } from "../../../types/product";
import { FormatPrice } from "../../../utils/FormatPrice";
import { useProducts } from "../../../contexts/products";
import { Link } from "react-router-dom";

interface Props {
    product: ProductCart
}

type action = 'plus'| 'minus' ;

const ProductOfCart: React.FC<Props> = ({product}) => {
    const { title, priceOffer, isOffer, price, images, brand, categories, amountInCart } = product;    
    const { productsCart, setProductsCart } = useProducts();

    const handleModifyProductCart = (action: action)=>{                
        let list = productsCart as ProductCart[];
        let newProduct = {} as ProductCart;

        if(action === 'plus') {
            if(amountInCart === product.stock) return;
            newProduct = {...product, amountInCart: amountInCart + 1};
        }else {            
            if(amountInCart === 1) return;
            newProduct = {...product, amountInCart: amountInCart - 1};
        }

        list = list.map((pr) => {
            if(pr.id === product.id) return newProduct;
            return pr
        })
        
        setProductsCart(list)
    }

    const handleDeleteProduct = ()=> {
        const list = productsCart.filter(pr => pr.id !== product.id);

        setProductsCart(list);
    }

    return (
        <div className="max-sm:grid-cols-1 grid grid-cols-2 bg-white rounded-md overflow-hidden">
            <Link className="flex aspect-square" to={`/details/${product.id}`}>
                <img 
                    src={images[0].src} 
                    alt="product" 
                    className="max-sm:border-b w-full aspect-square object-cover object-center p-2 border-r"
                />
            </Link>
            <aside className="flex flex-col w-full">
                <div className="max-sm:text-2xl px-3 font-primary text-xl py-3 border-b w-full">
                    <h2>{title}</h2>
                </div>
                <div className="max-sm:text-xl max-sm:gap-6 flex flex-col text-sm h-full justify-between px-3 font-secondary">
                    <div className="mt-4 flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <span>Brands:</span>
                            <span className="capitalize">{brand.join(', ')}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Categories:</span>
                            <span className="capitalize">{categories.join(', ')}</span>
                        </div>
                    </div>
                    <div className="flex mb-4 justify-between items-center">
                        <div className="font-secondary flex gap-2 border border-brown px-3 py-1 rounded-sm">
                            <button onClick={()=>handleModifyProductCart('minus')}>
                                <MinusIcon className="w-4"/>
                            </button>
                            <span>{amountInCart}</span>
                            <button onClick={()=>handleModifyProductCart('plus')}>
                                <PlusIcon className="w-4"/>
                            </button>
                        </div>
                        <span>
                            $ {FormatPrice(isOffer ? priceOffer : price)}
                        </span>
                    </div>
                </div>
                <div className="max-sm:text-xl font-secondary text-sm flex border-t">
                    <Link to={`/details/${product.id}`} className="max-sm:py-3 text-center w-[50%] py-2 px-1 border-r">View Details</Link>
                    <button onClick={handleDeleteProduct} className="w-[50%] py-2 px-1 ">Delete</button>
                </div>
            </aside>
        </div>
    );
};

export default ProductOfCart;