import ButtonStyle from "../../../components/ui/ButtonStyle";

const BannerSection = () => {
    return (
        <div className="flex gap-8 mb-12 px-10 py-12 bg-light-brown items-center">
            <div className="w-[50%] relative pb-12 pl-[4.5rem]">
                <img 
                    src="../../src/assets/images/model2.jpg" 
                    alt="banner" 
                    className="h-[38rem] w-full object-cover rounded-xl"
                />
                <img 
                    src="../../src/assets/images/collar.jpg" 
                    alt="banner" 
                    className="absolute left-0 bottom-0 h-[20rem] border-4 border-light-brown w-36 rounded-full object-cover object-center"
                />                
            </div>
            <section className="w-[50%]">
                <h2 className="text-4xl font-primary">Jewelry Unique Styles</h2>
                <p className="font-secondary mt-4 mb-6 text-rat-gray">
                    There are many variations of passages of Lorem Ipsum avaible, but majority
                    hove suffered alteration in some form by injected humour,
                    randomised words which don't look even slightly belieble.
                </p>
                <ButtonStyle/>
            </section>
        </div>
    );
};

export default BannerSection;