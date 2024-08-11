const ContactUs = () => {
    return (
        <section className="font-secondary mx-10 py-12 text-center">
            <span className="text-rat-gray">Always for you</span>
            <h2 className="font-primary text-4xl my-2.5">Contact Us</h2>
            <span className="text-rat-gray">Mon - Fri 9:00am - 5:00pm *Excluding holidays</span>            
            <form 
                action=""
                className="mx-auto grid grid-cols-2 mt-8 max-w-[800px] gap-y-8 gap-x-4"
            >
                <div className="flex flex-col col-span-1 text-start gap-2">
                    <label htmlFor="">Name:</label>
                    <input 
                        className="border rounded-md h-10 outline-none px-2" 
                        type="text" 
                    />
                </div>
                <div className="flex flex-col col-span-1 text-start gap-2">
                    <label htmlFor="">Email:</label>
                    <input 
                        className="border rounded-md h-10 outline-none px-2" 
                        type="text" 
                    />
                </div>
                <div className="flex flex-col col-span-2 text-start gap-2">
                    <label htmlFor="">Message:</label>
                    <textarea 
                        className="border rounded-md h-40 pt-2 outline-none px-2"                         
                    />
                </div>
                <button className="col-span-2 border hover:text-white border-brown py-2 px-7 mx-auto hover:bg-brown bg-white transition-all hover:white rounded-md text-center text-brown">Enviar</button>
            </form>
        </section>
    );
};

export default ContactUs;