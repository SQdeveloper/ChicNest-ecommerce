import { ArrowRightIcon } from "../../../components/ui/icons";

const FeaturedSection = () => {
    return (
        <section className="my-16">
            <h2 className="mb-7 text-4xl font-medium font-primary">Featured Products</h2>
            <div className="flex gap-4">
                <img 
                    src="https://cdn.pixabay.com/photo/2023/12/22/01/37/woman-8463055_640.jpg" 
                    alt="person banner" 
                    className="rounded-md overflow-hidden object-cover w-[50%] h-[90svh] "
                />
                <div className="w-[50%] gap-4 grid grid-cols-2 grid-rows-2">
                    <aside className="font-secondary bg-[#F1F1F1] rounded-md overflow-hidden">
                        <img 
                            src="https://www.joyeriamurguia.com/1751-home_default/dije-ojo-turco-lila.jpg" alt="product" 
                            className="w-full h-auto object-cover"
                        />
                        <div className="justify-between bg-white px-2 py-2 mb-1 mx-1 rounded-sm flex gap-2 items-start">
                            <div className="text-sm font-bold">
                                <h4 className="text-rat-gray mb-2">Copper Gold Plated</h4>
                                <div className="flex gap-2 items-center">
                                    <span>$ 195.00</span>                                
                                    <span className="text-xs mb-[2px] text-light-gray">$ 100.00 USD</span>
                                </div>
                            </div>
                            <ArrowRightIcon className="rounded-full p-1 border border-brown w-6 text-brown"/>
                        </div>
                    </aside>
                    <aside className="font-secondary bg-[#F1F1F1] rounded-md overflow-hidden">
                        <img 
                            src="https://www.joyeriamurguia.com/1751-home_default/dije-ojo-turco-lila.jpg" alt="product" 
                            className="w-full h-auto object-cover"
                        />
                        <div className="justify-between bg-white px-2 py-2 mb-1 mx-1 rounded-sm flex gap-2 items-start">
                            <div className="text-sm font-bold">
                                <h4 className="text-rat-gray mb-2">Copper Gold Plated</h4>
                                <div className="flex gap-2 items-center">
                                    <span>$ 195.00</span>                                
                                    <span className="text-xs mb-[2px] text-light-gray">$ 100.00 USD</span>
                                </div>
                            </div>
                            <ArrowRightIcon className="rounded-full p-1 border border-brown w-6 text-brown"/>
                        </div>
                    </aside>
                    <aside className="font-secondary bg-[#F1F1F1] rounded-md overflow-hidden">
                        <img 
                            src="https://www.joyeriamurguia.com/1751-home_default/dije-ojo-turco-lila.jpg" alt="product" 
                            className="w-full h-auto object-cover"
                        />
                        <div className="justify-between bg-white px-2 py-2 mb-1 mx-1 rounded-sm flex gap-2 items-start">
                            <div className="text-sm font-bold">
                                <h4 className="text-rat-gray mb-2">Copper Gold Plated</h4>
                                <div className="flex gap-2 items-center">
                                    <span>$ 195.00</span>                                
                                    <span className="text-xs mb-[2px] text-light-gray">$ 100.00 USD</span>
                                </div>
                            </div>
                            <ArrowRightIcon className="rounded-full p-1 border border-brown w-6 text-brown"/>
                        </div>
                    </aside>
                    <aside className="font-secondary bg-[#F1F1F1] rounded-md overflow-hidden">
                        <img 
                            src="https://www.joyeriamurguia.com/1751-home_default/dije-ojo-turco-lila.jpg" alt="product" 
                            className="w-full h-auto object-cover"
                        />
                        <div className="justify-between bg-white px-2 py-2 mb-1 mx-1 rounded-sm flex gap-2 items-start">
                            <div className="text-sm font-bold">
                                <h4 className="text-rat-gray mb-2">Copper Gold Plated</h4>
                                <div className="flex gap-2 items-center">
                                    <span>$ 195.00</span>                                
                                    <span className="text-xs mb-[2px] text-light-gray">$ 100.00 USD</span>
                                </div>
                            </div>
                            <ArrowRightIcon className="rounded-full p-1 border border-brown w-6 text-brown"/>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;