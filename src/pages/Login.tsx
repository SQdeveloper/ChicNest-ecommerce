import { FacebookIcon, GithubIcon, GoogleIcon, LinkedinkIcon } from "../components/ui/icons";

const Login = () => {
    return (
        <div className="flex h-without-header justify-center items-center bg-light-brown w-full">
            <div className="bg-white max-w-[850px] w-full grid grid-cols-2 rounded-xl font-secondary overflow-hidden">
                <section 
                    className="flex flex-col gap-4 bg-white text-center py-10 px-10"
                >  
                    <h2 className="font-primary text-3xl">Sign in</h2>
                    <div className="flex gap-4 mx-auto">
                        <button className="rounded-md border px-1.5 w-8 aspect-square transition-all duration-300 hover:text-brown">
                            <GoogleIcon className="w-full h-full"/>  
                        </button>
                        <button className="rounded-md border px-1.5 w-8 aspect-square transition-all duration-300 hover:text-brown">                            
                            <FacebookIcon className="w-full h-full"/>
                        </button>
                        <button className="rounded-md border px-1.5 w-8 aspect-square transition-all duration-300 hover:text-brown">                                                        
                            <GithubIcon className="w-full h-full"/>
                        </button>
                        <button className="rounded-md border px-1.5 w-8 aspect-square transition-all duration-300 hover:text-brown">                                                                                    
                            <LinkedinkIcon className="w-full h-full"/>
                        </button>
                    </div>
                    <span className="block text-rat-gray">or use your email password</span>
                    <form className="flex flex-col gap-6" action="">
                        <input className="text-sm  bg-extra-light-gray px-2 py-2 rounded-md" placeholder="Introduce your user" type="text" />
                        <input className="text-sm  bg-extra-light-gray px-2 py-2 rounded-md" placeholder="Introduce your password" type="password" />
                        <a href="" className="text-rat-gray">Forget your password?</a>
                        <button className="text-white text-sm bg-brown rounded-md px-8 w-fit mx-auto py-2 uppercase">sign in</button>
                    </form>
                </section>
                <section className="py-4 px-8 text-white font-secondary flex flex-col justify-center items-center rounded-tl-[120px] rounded-bl-[120px] bg-brown">
                    <h2 className="font-primary text-3xl text-white">Hello, Friend!</h2>
                    <p className="mt-4 mb-6 font-light max-w-[330px] text-center">Register with your personal details to use all of site features</p>
                    <button 
                        className="text-white border border-white text-sm rounded-md px-8 py-2 uppercase"
                    >
                        sign up
                    </button>
                </section>
            </div>
        </div>
    );
};

export default Login;