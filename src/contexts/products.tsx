import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { Product, ProductCart } from "../types/product";
import products from '../database/database.json'
import useLocalStorage from "../hooks/useLocalStorage";

interface ProductsProviderProps {
    products: Product[]
    productsCart: ProductCart[],
    setProductsCart: Dispatch<SetStateAction<ProductCart[]>>
}

const ProductsContext = createContext<ProductsProviderProps>({
    products: [],
    productsCart: [],
    setProductsCart: ()=> {},
});

export const ProductsProvider = ({children}: {children: React.ReactNode})=>{
    const [productsCart, setProductsCart] = useLocalStorage('__products__cart__', []);

    return(
        <ProductsContext.Provider value={{products, productsCart, setProductsCart}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = ()=> useContext(ProductsContext);