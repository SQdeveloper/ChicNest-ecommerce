import ButtonStyle from "../../../components/ui/ButtonStyle";

const Hero = () => {
    return (
        <div className="w-full bg-light-brown">
            <section className="max-sm:px-5 max-xl:justify-center max-xl:flex-col max-w-[1280px] mx-auto height-svh w-full justify-between px-9 py-4 flex gap-8 items-center">            
                <div className="max-xl:text-center text-wrap px-4">
                    <h2 className="max-[360px]:text-[42px] flex-wrap max-[800px]:text-5xl max-xl:flex-row max-xl:justify-center flex flex-col gap-4 font-primary max-xl:text-4xl xl:text-6xl text-dark-gray">
                        <div className="text-nowrap">Experience the</div>
                        <div className="text-nowrap flex gap-4 items-center">
                            <span>Brillance of</span>
                            <img className="w-24 h-11 rounded-full object-cover object-center" src="../../src/assets/images/image.jpg" alt="collar" />
                        </div>
                        <div>Craftsmanship</div>                        
                    </h2>
                    <p className="max-xl:text-xl font-secondary max-[800px]:text-md max-xl:w-full max-xl:max-w-full max-w-[550px] mt-6 mb-8 text-rat-gray">Discover a world Where beauty meets craftsmanship, where every piece of jewerly tell a story.</p>
                    <div className="max-xl:flex max-xl:justify-center">
                        <ButtonStyle/>
                    </div>
                </div>
                <div className="max-sm:gap-4 flex gap-6">
                    <img 
                        src="https://images.pexels.com/photos/27221212/pexels-photo-27221212/free-photo-of-mujer-modelo-maqueta-retrato.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" 
                        className="max-sm:aspect-[5/7] max-sm:max-w-full max-sm:w-[50%] object-cover overflow-hidden border-r-[1px] border-b-[1px] border-dark-gray pr-2 max-w-60 lg:w-44 xl:w-full aspect-[5/7] rounded-t-full rounded-b-md"
                    />
                    <img 
                        src="https://images.pexels.com/photos/16734787/pexels-photo-16734787/free-photo-of-moda-mujer-modelo-maqueta.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" 
                        className="max-sm:aspect-[5/7] max-sm:max-w-full max-sm:w-[50%] object-cover overflow-hidden border-r-[1px] border-t-[1px] border-dark-gray pr-2 max-w-60 lg:w-44 xl:w-full aspect-[5/7] rounded-t-md rounded-b-full"
                    />
                </div>
            </section>
        </div>
    );
};

export default Hero;