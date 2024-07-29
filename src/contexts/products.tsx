import { createContext, useContext } from "react";
import { Product } from "../types/product";
import products from '../database/database.json'

interface ProductsProviderProps {
    products: Product[]
}

const ProductsContext = createContext<ProductsProviderProps>({
    products: []
});

export const ProductsProvider = ({children}: {children: React.ReactNode})=>{
    
    return(
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = ()=> useContext(ProductsContext);