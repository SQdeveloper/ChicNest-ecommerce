const Checkbox = ({ text, htmlFor }: {text: string, htmlFor: string}) => {
    return (
        <div className="w-full">
            <input className="peer hidden" type="checkbox" id={htmlFor}/>
            <label className="text-[16px] text-rat-gray border cursor-pointer border-white w-full block px-2 py-2 rounded-md hover:bg-extra-light-gray peer-checked:bg-extra-light-gray" htmlFor={htmlFor}>{text}</label>
        </div>
    );
};

export default Checkbox;