import CardFeaturedProduct from "./CardFeaturedProduct";

const FeaturedSection = () => {
    return (
        <section className="my-16">
            <h2 className="mb-7 text-4xl font-medium font-primary">Featured Products</h2>
            <div className="flex gap-4">
                <img 
                    src="../../src/assets/images/model_featured.jpg" 
                    alt="person banner" 
                    className="rounded-md object-center overflow-hidden object-cover w-[50%] h-[90svh] "
                />
                <div className="w-[50%] gap-4 grid grid-cols-2 grid-rows-2">
                    <CardFeaturedProduct/>
                    <CardFeaturedProduct/>
                    <CardFeaturedProduct/>
                    <CardFeaturedProduct/>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;