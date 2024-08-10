import { toast } from "sonner";
import { Product, ProductCart } from "../types/product";
import { Dispatch, SetStateAction } from "react";

export const saveToCart = (product: Product, productsCart: ProductCart[], setProductsCart: Dispatch<SetStateAction<ProductCart[]>>)=>{    
    let list = productsCart;
    const indexFind = list.findIndex((pr: ProductCart) => pr.id === product.id)

    if(indexFind >= 0) {
        list = list.map((_product: ProductCart) => {
            if(_product.id === product.id) {
                return {..._product, amountInCart: _product.amountInCart + 1}
            }
            return _product;                
        })
    }else {
        list = [{...product, amountInCart: 1}, ...list]
    }
    
    setProductsCart(list)

    //Active toaster
    toast.message('Product has been saved', {
        description: `${product.title}`,            
    })
}