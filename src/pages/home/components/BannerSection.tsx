import ButtonStyle from "../../../components/ui/ButtonStyle";

const BannerSection = () => {
    return (
        <div className="bg-light-brown">
            <div className="max-sm:px-5 max-[800px]:flex-col max-w-[1280px] mx-auto flex gap-8 max-xl:py-10 mb-12 px-10 py-12 items-center">
                <div className="max-[800px]:pb-0 max-[800px]:pl-0 max-[800px]:w-full w-[50%] max-xl:pb-8 max-xl:pl-[3rem] relative pb-12 pl-[4.5rem]">
                    <img 
                        src="../../src/assets/images/model2.jpg" 
                        alt="banner" 
                        className="max-sm:h-[25rem] max-xl:h-[30rem] h-[38rem] w-full object-cover rounded-xl"
                    />
                    <img 
                        src="../../src/assets/images/collar.jpg" 
                        alt="banner" 
                        className="max-[800px]:hidden max-xl:w-24 max-xl:h-[15rem] absolute left-0 bottom-0 h-[20rem] border-4 border-light-brown w-36 rounded-full object-cover object-center"
                    />                
                </div>
                <section className="max-[800px]:w-full w-[50%]">
                    <h2 className="text-4xl font-primary">Jewelry Unique Styles</h2>
                    <p className="max-xl:text-xl font-secondary mt-4 mb-6 text-rat-gray">
                        There are many variations of passages of Lorem Ipsum avaible, but majority
                        hove suffered alteration in some form by injected humour,
                        randomised words which don't look even slightly belieble.
                    </p>
                    <ButtonStyle/>
                </section>
            </div>
        </div>
    );
};

export default BannerSection;