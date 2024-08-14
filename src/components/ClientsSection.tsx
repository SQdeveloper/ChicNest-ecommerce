const ClientsSection = () => {
    return (
        <section className="max-md:pt-8 max-lg:px-5 font-secondary text-center bg-extra-light-gray rounded-md text-dark-gray p-10">
            <h2 className="max-md:w-full w-[450px] leading-[50px] text-center mx-auto text-4xl font-primary">Hear from Those Whose Lives We've Touched</h2>
            <div className="max-lg:gap-8 max-lg:h-auto max-lg:flex-col mt-7 flex gap-2 h-[500px]">
                <div className="h-full effect-image w-full flex flex-col">
                    <img 
                        className="max-lg:aspect-[7/5] h-full rounded-md overflow-hidden w-full object-cover object-center" 
                        src="../../src/assets/images/testimonio1.jpg"
                        alt="testimony" 
                    />
                    <h3 className="max-lg:text-2xl mt-4 mb-1 font-bold">Sana Anwar</h3>
                    <span className="">Branch Manager</span>
                </div>
                <div className="h-full effect-image w-full flex flex-col">
                    <img 
                        className="max-lg:aspect-[7/5] h-full rounded-md overflow-hidden w-full object-cover object-center" 
                        src="../../src/assets/images/testimonio3.jpg"
                        alt="testimony" 
                    />
                    <h3 className="max-lg:text-2xl mt-4 mb-1 font-bold">Sandy K</h3>
                    <span className="">Railway employee</span>
                </div>
                <div className="h-full effect-image w-full flex flex-col">
                    <img 
                        className="max-lg:aspect-[7/5] h-full rounded-md overflow-hidden w-full object-cover object-center" 
                        src="../../src/assets/images/testimonio2.jpg"
                        alt="testimony" 
                    />
                    <h3 className="max-lg:text-2xl mt-4 mb-1 font-bold">Ranjeet Sehgal</h3>
                    <span className="">School Teacher</span>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;