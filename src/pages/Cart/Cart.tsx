import { Link } from "react-router-dom";
import { MoneyIcon, ReturnIcon, ShieldIcon } from "../../components/ui/icons";
import ProductOfCart from "./components/ProductOfCart";
import { ProductCart } from "../../types/product";
import { useProducts } from "../../contexts/products";
import { useEffect, useState } from "react";
import { FormatPrice } from "../../utils/FormatPrice";

const Cart = () => {    
    const { productsCart } = useProducts();
    const [subtotal, setSubtotal] = useState(0);

    const getTotalPrice = ()=>{
        let subtotal = 0;

        productsCart.forEach(product => {
           const price = product.isOffer ? product.priceOffer : product.price; 
           subtotal += price * product.amountInCart;
        })

        setSubtotal(subtotal)
    }

    useEffect(()=>{
        getTotalPrice();
    },[productsCart])

    return (
        <div className="max-xl:flex-col flex">
            <div className="max-md:py-[2.5rem] max-md:px-5 max-xl:py-8 max-xl:px-7 px-10 py-10 w-full bg-extra-light-gray">
                <div className="max-w-[800px] mx-auto">
                    <aside className="max-md:text-center max-md:items-center max-md:flex-col max-md:gap-3 flex justify-between">
                        <h2 className="max-md:text-4xl text-2xl font-primary">My Shopping Cart</h2>
                        <Link 
                            to={'/shop'}
                            className="max-md:text-xl w-fit border-b border-dark-gray"
                        >
                            Continue shopping
                        </Link>
                    </aside>
                    <div className="max-md:mt-10 flex flex-col gap-4 mt-6">
                        {
                            productsCart && productsCart.length > 0 ?
                                productsCart.map((product: ProductCart) => (
                                    <ProductOfCart 
                                        key={product.id}
                                        product={product}                                    
                                    />
                                ))
                                :
                                <div className="bg-white rounded-md py-28 px-4 flex flex-col gap-6 items-center text-center">
                                    <h2 className="text-3xl font-primary">Your shopping cart is empty</h2>
                                    <Link to={'/shop'} className="text-brown font-semibold border-2 font-secondary rounded-full px-6 hover:bg-brown hover:text-white transition-all py-3 bg-white border-brown">
                                        Continue shopping
                                    </Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
            <div className="max-md:text-xl max-lg:w-full max-xl:w-[620px] [1400px]:w-[700px] pb-6 bg-white w-[670px] font-secondary">
                <div className="max-md:px-5 max-xl:px-7 py-8 border-b px-10">
                    <div className="flex justify-between gap-4">
                        <span>Subtotal</span>
                        <span>$ {FormatPrice(subtotal)}</span>
                    </div>
                    <div className="mt-4 flex justify-between gap-4">
                        <span>Delivery</span>
                        <span>$ 15,00</span>
                    </div>
                    <div className="mt-4 flex justify-between gap-4">
                        <span>Total</span>
                        <span>$ {FormatPrice(subtotal + 15)}</span>
                    </div>
                    <div className="mt-8 flex flex-col gap-4">
                        <button className="bg-brown hover:opacity-[80%] transition-all rounded-full py-2 px-2 text-white">Advance Payment</button>
                        <button className="paypal rounded-full py-2 px-2 text-white">Paypal</button>
                    </div>
                </div>
                <div className="max-sm:px-5 max-lg:px-7 px-10 pt-4">
                    <aside className="py-4 flex gap-5 items-center">
                        <MoneyIcon className='max-md:w-10 max-md:h-10 w-7 h-7 text-brown' />
                        <div className="flex-1 font-secondary flex-col flex gap-1">
                            <h3 className="max-sm:text-2xl text-[18px] text-md">Payments</h3>
                            <p className="max-sm:text-[18px] text-sm">Accepted credit cards: Visa, American Express and MasterCard</p>
                        </div>
                    </aside>
                    <aside className="py-4 border-t border-b flex gap-5 items-center">
                        <ShieldIcon className='max-md:w-9 max-md:h-9 w-6 h-6 text-brown' />
                        <div className="flex-1 font-secondary flex-col flex gap-1">
                            <h3 className="max-sm:text-2xl text-[18px] text-md">Shipments</h3>
                            <p className="max-sm:text-[18px] text-sm">standard courtesy shipping</p>
                        </div>
                    </aside>
                    <aside className="py-4 flex gap-5 items-center">
                        <ReturnIcon className='max-md:w-10 max-md:h-10 w-7 h-7 text-brown' />
                        <div className="flex-1 font-secondary flex-col flex gap-1">
                            <h3 className="max-sm:text-2xl text-[18px] text-md">Returns and Exchanges</h3>
                            <p className="max-sm:text-[18px] text-sm">Free of charge</p>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Cart;