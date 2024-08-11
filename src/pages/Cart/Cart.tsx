import { Link } from "react-router-dom";
import { ShieldIcon } from "../../components/ui/icons";
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
        <div className="flex mb-12">
            <div className="px-10 py-10 w-[60%] bg-extra-light-gray">
                <aside className="flex justify-between">
                    <h2 className="text-2xl font-primary">My Shopping Cart</h2>
                    <Link 
                        to={'/shop'}
                        className="border-b border-dark-gray"
                    >
                        Continue shopping
                    </Link>
                </aside>
                <div className="flex flex-col gap-4 mt-6">
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
            <div className="bg-white w-[40%] font-secondary">
                <div className="py-8 border-b px-10">
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
                <div className="px-10 pt-4">
                    <aside className="py-4 flex gap-5 items-center">
                        <ShieldIcon/>
                        <div className="font-secondary flex-col flex gap-1">
                            <h3 className="text-[18px] text-md">Payments</h3>
                            <p className="text-sm">Accepted credit cards: Visa, American Express and MasterCard</p>
                        </div>
                    </aside>
                    <aside className="py-4 border-t border-b flex gap-5 items-center">
                        <ShieldIcon/>
                        <div className="font-secondary flex-col flex gap-1">
                            <h3 className="text-[18px] text-md">Shipments</h3>
                            <p className="text-sm">standard courtesy shipping</p>
                        </div>
                    </aside>
                    <aside className="py-4 flex gap-5 items-center">
                        <ShieldIcon/>
                        <div className="font-secondary flex-col flex gap-1">
                            <h3 className="text-[18px] text-md">Returns and Exchanges</h3>
                            <p className="text-sm">Free of charge</p>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Cart;