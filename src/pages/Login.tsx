import { FacebookIcon, GithubIcon, GoogleIcon, LinkedinkIcon } from "../components/ui/icons";

const Login = () => {
    return (
        <div className="flex max-sm:pb-2 h-without-header max-md:py-10 max-md:h-auto justify-center items-center bg-light-brown w-full">
            <div className="max-sm:mx-5 max-lg:flex max-lg:flex-col max-lg:mx-8 bg-white max-w-[850px] w-full grid grid-cols-2 rounded-xl font-secondary overflow-hidden">
                <section 
                    className="max-md:px-8 max-sm:px-5 max-md:text-xl flex flex-col gap-4 bg-white text-center py-10 px-10"
                >  
                    <h2 className="max-sm:mb-3 max-md:text-5xl font-primary text-3xl">Sign in</h2>
                    <div className="flex gap-4 mx-auto">
                        <button className="max-sm:w-10 rounded-md border px-1.5 w-8 aspect-square transition-all duration-300 hover:text-brown">
                            <GoogleIcon className="w-full h-full"/>  
                        </button>
                        <button className="max-sm:w-10 rounded-md border px-1.5 w-8 aspect-square transition-all duration-300 hover:text-brown">                            
                            <FacebookIcon className="w-full h-full"/>
                        </button>
                        <button className="max-sm:w-10 rounded-md border px-1.5 w-8 aspect-square transition-all duration-300 hover:text-brown">                                                        
                            <GithubIcon className="w-full h-full"/>
                        </button>
                        <button className="max-sm:w-10 rounded-md border px-1.5 w-8 aspect-square transition-all duration-300 hover:text-brown">                                                                                    
                            <LinkedinkIcon className="w-full h-full"/>
                        </button>
                    </div>
                    <span className="block text-rat-gray">or use your email password</span>
                    <form className="max-md:mt-4 flex flex-col gap-6" action="">
                        <input className="max-sm:text-xl text-sm  bg-extra-light-gray px-2 py-2 rounded-md" placeholder="Introduce your user" type="text" />
                        <input className="max-sm:text-xl text-sm  bg-extra-light-gray px-2 py-2 rounded-md" placeholder="Introduce your password" type="password" />
                        <a href="" className="text-rat-gray">Forget your password?</a>
                        <button className="max-sm:text-[18px] max-sm:py-3 max-sm:px-12 text-white text-sm bg-brown rounded-md px-8 w-fit mx-auto py-2 uppercase">sign in</button>
                    </form>
                </section>
                <section className="max-sm:py-16 max-md:rounded-tr-[80px] max-md:rounded-tl-[80px] max-lg:rounded-bl-none max-lg:py-12 max-lg:rounded-tr-[120px] max-lg:rounded-tl-[120px] py-4 px-8 text-white font-secondary flex flex-col justify-center items-center rounded-tl-[120px] rounded-bl-[120px] bg-brown">
                    <h2 className="max-sm:text-4xl font-primary text-3xl text-white">Hello, Friend!</h2>
                    <p className="max-sm:text-xl mt-4 mb-6 font-light max-w-[330px] text-center">Register with your personal details to use all of site features</p>
                    <button 
                        className="max-sm:text-[18px] text-white border border-white text-sm rounded-md px-8 py-2 uppercase"
                    >
                        sign up
                    </button>
                </section>
            </div>
        </div>
    );
};

export default Login;