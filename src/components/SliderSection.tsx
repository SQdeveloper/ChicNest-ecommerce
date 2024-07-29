import { useProducts } from "../contexts/products";
import Slider from "./ui/Slider";

const SliderSection = () => {
    const { products } = useProducts();    

    return (
        <section className="mt-[70px]">
            <h2 className="mb-8 text-center font-primary text-3xl">Sparkle in Love</h2>
            <Slider itemsPerPage={5} items={products.slice(0, 10)}/>
        </section>
    );
};

export default SliderSection;