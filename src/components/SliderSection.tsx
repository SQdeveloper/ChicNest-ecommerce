import { Product } from "../types/product";
import Slider from "./ui/Slider";

interface Props {
    products: Product[],
    itemsPerPage: number
}

const SliderSection: React.FC<Props> = ({products, itemsPerPage}) => {

    return (
        <section className="mt-[70px] text-dark-gray">
            <h2 className="mb-8 text-center font-primary text-3xl">Sparkle in Love</h2>
            <Slider itemsPerPage={itemsPerPage} items={products}/>
        </section>
    );
};

export default SliderSection;