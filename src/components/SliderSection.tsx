import Slider from "./ui/Slider";

const SliderSection = () => {
    return (
        <section className="mt-16">
            <h2 className="mb-8 text-center font-primary text-3xl">Sparkle in Love</h2>
            <Slider itemsPerPage={4}/>
        </section>
    );
};

export default SliderSection;