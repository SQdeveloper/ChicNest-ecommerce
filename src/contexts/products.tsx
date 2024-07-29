import { createContext, useContext } from "react";
import { Product } from "../types/product";
import products from '../database/database.json'

const ProductsContext = createContext<Product[]>([]);

export const ProductsProvider = ({children}: {children: React.ReactNode})=>{
    
    return(
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = ()=>{useContext(ProductsContext)}