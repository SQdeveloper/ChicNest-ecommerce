import { Link } from "react-router-dom";

const Button = ({children, className}: {className?:string, children:React.ReactNode}) => {
    return (
        <Link  
            to=''
            className={`${className} px-4 py-2 text-center rounded-full bg-brown relative shadow block font-secondary text-sm w-fit text-white`}
        >
            {children}
        </Link>
    );
};

export default Button;