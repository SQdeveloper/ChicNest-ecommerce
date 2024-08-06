import { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import { useProducts } from "../../../contexts/products";

const useFilters = (
        selectedCategories: string[], selectedBrands: string[],
        selectedTitle: string,
        priceValues: number[],
    ) =>  {

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

        //Filter by name         
        if(selectedTitle !== '') {
            list = list.filter(product => product.title.toLowerCase().includes(selectedTitle.toLowerCase()))
        }        
        
        //If selectedBrands and selectedCategories and selectedTitle are empty the list will be all products
        if(
            selectedBrands.length === 0 && 
            selectedCategories.length === 0 && 
            selectedTitle === ''            
        ) list = products;

        //Filter by price        
        list = list.filter(product => product.price > priceValues[0] && product.price < priceValues[1])        
        setFilteredProducts(list);
    }
    
    useEffect(()=>{                
        filterProducts();
    }, [selectedCategories, selectedBrands, selectedTitle, priceValues]);

    return { filteredProducts };
};

export default useFilters;