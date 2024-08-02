import { SearchIcon } from "./icons";

const InputSearch = ({ placeholder, className }: {placeholder: string, className?: string}) => {
    return (
        <div className={`${className} flex w-64 border border-light-gray rounded-full py-1.5 px-3.5 text-sm`}>
            <input 
                type="text"
                placeholder={placeholder}
                className="w-full border-none outline-none bg-transparent"
            />
            <SearchIcon/>
        </div>
    );
};

export default InputSearch;