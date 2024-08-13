import { useEffect, useState } from "react";
import { useProducts } from "../../../contexts/products";
import CardFeaturedProduct from "./CardFeaturedProduct";
import { Product } from "../../../types/product";

const FeaturedSection = () => {
    const { products } = useProducts();        
    const [productsToShow, setProductsToShow] = useState<Product[]>();

    useEffect(()=>{        
        const result = products.filter(product => product.isOffer);
        setProductsToShow(()=>{
            if(result.length < 4 || !result) return products.slice(0,4);
            else return result.slice(0,4);
        })
    }, [products])

    return (
        <section className="max-xl:my-12 my-16">
            <h2 className="mb-7 text-4xl font-medium font-primary">Featured Products</h2>
            <div className="max-[800px]:flex-col flex gap-4">
                <img 
                    src="../../src/assets/images/model_featured.jpg" 
                    alt="person banner" 
                    className="max-[800px]:aspect-square max-[800px]:w-full rounded-md object-center overflow-hidden object-cover w-[50%] aspect-[7/6]"
                />
                <div className="max-sm:grid-cols-1 max-[800px]:w-full w-[50%] gap-4 grid grid-cols-2 grid-rows-2">
                    {
                        productsToShow && productsToShow.length > 0 && 
                            productsToShow.map(product => (
                                <CardFeaturedProduct key={product.id} product={product}/>                    
                            ))
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;