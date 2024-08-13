const InstragramSection = () => {
    return (
        <section className="text-center">
            <h2 className="text-4xl font-primary">Instagram Wall</h2>
            <p className="max-xl:text-xl mx-auto mt-4 mb-8 max-w-[300px] text-rat-gray font-secondary">Follow us on Instagram and be part of the Lavish story</p>
            <div className="max-sm:gap-3 grid-place gap-5">
                <div className="max-sm:gap-3 flex flex-col gap-5 w-full">
                    <img 
                        className="rounded-md object-cover aspect-[5/6] object-center w-full" 
                        src="../../src/assets/images/model3.jpg" 
                        alt="instagram-image" 
                    />
                    <img 
                        className="rounded-md object-cover aspect-square object-center w-full" 
                        src="../../src/assets/images/model4.jpg" 
                        alt="instagram-image" 
                    />
                </div>
                <div className="max-sm:gap-3 flex flex-col gap-5 w-full">
                    <img 
                        className="rounded-md object-cover aspect-square object-center w-full" 
                        src="../../src/assets/images/model5.jpg" 
                        alt="instagram-image" 
                    />
                    <img 
                        className="rounded-md object-cover aspect-[5/6] object-center w-full" 
                        src="../../src/assets/images/model6.jpg" 
                        alt="instagram-image" 
                    />
                </div>
                <div className="max-sm:hidden max-sm:gap-3 flex flex-col gap-5 w-full">
                    <img 
                        className="rounded-md object-cover aspect-[5/6] object-center w-full" 
                        src="../../src/assets/images/model7.jpg" 
                        alt="instagram-image" 
                    />
                    <img 
                        className="rounded-md object-cover aspect-square object-center w-full" 
                        src="../../src/assets/images/model8.jpg" 
                        alt="instagram-image" 
                    />
                </div>
                <div className="max-[800px]:hidden flex flex-col gap-5 w-full">
                    <img 
                        className="rounded-md object-cover aspect-square object-center w-full" 
                        src="../../src/assets/images/model9.jpg" 
                        alt="instagram-image" 
                    />
                    <img 
                        className="rounded-md object-cover aspect-[5/6] object-center w-full" 
                        src="../../src/assets/images/model10.jpg" 
                        alt="instagram-image" 
                    />
                </div>
            </div>
        </section>
    );
};

export default InstragramSection;