import ButtonStyle from "../../../components/ui/ButtonStyle";

const PromotionSection = () => {
    return (
        <div className="flex w-full gap-4 mb-16">
            <section className="text-start w-[50%] rounded-md bg-extra-light-gray px-8 py-8 flex flex-col justify-center items-start">
                <span className="font-secondary bg-white rounded-full px-4 py-2">Get 25% off this week</span>
                <h2 className="mt-8 mb-7 font-primary text-4xl">Unleash your Cravings, Not your Wallet!</h2>
                <ButtonStyle/>
            </section>
            <img 
                src="../../src/assets/images/model11.jpg" 
                alt="banner" 
                className="rounded-md object-cover object-center w-[50%] aspect-[7/6]"
            />
        </div>
    );
};

export default PromotionSection;