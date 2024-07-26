import ButtonStyle from "../../../components/ui/ButtonStyle";

const Hero = () => {
    return (
        <section className="bg-light-brown height-svh w-full justify-between px-9 py-4 flex gap-8 items-center">
            <div>
                <h2 className="flex flex-col gap-4 font-primary text-6xl text-dark-gray">
                    <div>Experience the</div>
                    <div className="flex gap-4 items-center">
                        <span>Brillance of</span>
                        <img className="w-24 h-11 rounded-full object-cover object-center" src="../../src/assets/images/image.jpg" alt="collar" />
                    </div>
                    <div>Craftsmanship</div>                        
                </h2>
                <p className="font-secondary mt-6 mb-8 text-rat-gray">Discover a world Where beauty meets craftsmanship, where every piece of jewerly tell a story.</p>
                <ButtonStyle/>
            </div>
            <div className="flex gap-11">
                <img 
                    src="https://images.pexels.com/photos/27221212/pexels-photo-27221212/free-photo-of-mujer-modelo-maqueta-retrato.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" 
                    className="border-r-[1px] border-b-[1px] border-dark-gray pr-2 w-60 aspect-[5/7] rounded-t-full rounded-b-md"
                />
                <img 
                    src="https://images.pexels.com/photos/16734787/pexels-photo-16734787/free-photo-of-moda-mujer-modelo-maqueta.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" 
                    className="border-r-[1px] border-t-[1px] border-dark-gray pr-2 w-60 aspect-[5/7] rounded-t-md rounded-b-full"
                />
            </div>
        </section>
    );
};

export default Hero;