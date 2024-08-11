import Acordeon from "./Acordeon";

const QuestionsSection = () => {
    return (
        <section className="relative text-center bg-extra-light-gray py-12">
            <span className="capitalize text-rat-gray font-secondary">ask us anything</span>
            <h2 className="capitalize mt-3 font-primary text-4xl">frequently asked questions</h2>
            <p className="text-rat-gray font-secondary mt-4">Our friendly team would love to answer your questions</p>
            <Acordeon/>            
            <img className="absolute top-40 left-5" src="../../src/assets/images/perlas.png" alt="" />
            <img className="absolute top-40 right-5 -scale-x-100" src="../../src/assets/images/perlas.png" alt="" />
        </section>
    );
};

export default QuestionsSection;