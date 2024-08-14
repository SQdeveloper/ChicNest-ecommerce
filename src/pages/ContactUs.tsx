const ContactUs = () => {
    return (
        <section className="max-md:mx-5 font-secondary mx-10 py-12 text-center">
            <span className="max-md:text-xl text-rat-gray">Always for you</span>
            <h2 className="max-md:text-5xl max-md:my-4 font-primary text-4xl my-2.5">Contact Us</h2>
            <span className="max-md:text-xl text-rat-gray">Mon - Fri 9:00am - 5:00pm *Excluding holidays</span>            
            <form 
                action=""
                className="max-lg:flex max-lg:flex-col mx-auto grid grid-cols-2 mt-8 max-w-[800px] gap-y-8 gap-x-4"
            >
                <div className="max-md:text-xl flex flex-col col-span-1 text-start gap-2">
                    <label htmlFor="">Name:</label>
                    <input 
                        className="max-md:h-12 border rounded-md h-10 outline-none px-2" 
                        type="text" 
                    />
                </div>
                <div className="max-md:text-xl flex flex-col col-span-1 text-start gap-2">
                    <label htmlFor="">Email:</label>
                    <input 
                        className="max-md:h-12 border rounded-md h-10 outline-none px-2" 
                        type="text" 
                    />
                </div>
                <div className="max-md:text-xl max-lg:col-span-1 flex flex-col col-span-2 text-start gap-2">
                    <label htmlFor="">Message:</label>
                    <textarea 
                        className="border rounded-md h-40 pt-2 outline-none px-2"                         
                    />
                </div>
                <button className="max-md:text-xl col-span-2 border hover:text-white border-brown py-2 px-7 mx-auto hover:bg-brown bg-white transition-all hover:white rounded-md text-center text-brown">Enviar</button>
            </form>
        </section>
    );
};

export default ContactUs;