import { SetStateAction } from "react";
import { SearchIcon } from "./icons";

interface Props {
    placeholder?: string,
    className?: string,
    setValue?: React.Dispatch<SetStateAction<string>>
}

const InputSearch: React.FC<Props> = ({ placeholder, className, setValue }) => {
    return (
        <div className={`${className} flex w-64 border border-light-gray rounded-full text-sm pr-3.5 items-center`}>
            <input 
                type="text"
                placeholder={placeholder}                
                onChange={(e)=> setValue && setValue(e.target.value)}
                className="w-full border-none outline-none bg-transparent py-1.5 pl-3.5"
            />
            <SearchIcon className="mb-[2px]"/>
        </div>
    );
};

export default InputSearch;