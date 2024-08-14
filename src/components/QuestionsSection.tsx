import Acordeon from "./Acordeon";

const QuestionsSection = () => {
    return (
        <div className="bg-extra-light-gray">
            <section className="px-2 max-w-[1280px] mx-auto relative text-center py-12">
                <span className="max-md:text-xl capitalize text-rat-gray font-secondary">ask us anything</span>
                <h2 className="capitalize mt-3 font-primary text-4xl">frequently asked questions</h2>
                <p className="max-md:text-xl text-rat-gray font-secondary mt-4">Our friendly team would love to answer your questions</p>
                <Acordeon/>            
                <img className="max-xl:hidden absolute top-40 left-5" src="../../src/assets/images/perlas.png" alt="" />
                <img className="max-xl:hidden absolute top-40 right-5 -scale-x-100" src="../../src/assets/images/perlas.png" alt="" />
            </section>
        </div>
    );
};

export default QuestionsSection;