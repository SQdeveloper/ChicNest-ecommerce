import { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import { useProducts } from "../../../contexts/products";

const useFilters = (selectedCategories: string[], selectedBrands: string[]) =>  {
    const { products } = useProducts();
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const filterProducts = ()=> {        
        let list = products;

        //Filter by categories
        if(selectedCategories.length > 0) {
            list = list.filter(product => 
                product.categories.some(category => selectedCategories.includes(category))
            )
        }
        
        //Filter by brands
        if(selectedBrands.length > 0) {
            list = list.filter(product => 
                product.brand.some(category => selectedBrands.includes(category))
            )
        }
        
        setFilteredProducts(list);
    }
    
    useEffect(()=>{
        if(selectedBrands.length === 0 && selectedCategories.length === 0) return setFilteredProducts(products);
        filterProducts();
    }, [selectedCategories, selectedBrands]);

    return { filteredProducts };
};

export default useFilters;