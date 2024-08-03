import { ChangeEventHandler } from "react";

const Checkbox = ({onChange, name, text, htmlFor, defaultChecked }: {onChange?: ChangeEventHandler<HTMLInputElement>, defaultChecked?: boolean, name?: string, text: string, htmlFor: string}) => {
    return (
        <div className="w-full">
            <input onChange={onChange} defaultChecked={defaultChecked} name={name} className="peer hidden" type="checkbox" id={htmlFor}/>
            <label className="text-[16px] text-rat-gray border cursor-pointer border-white w-full block px-2 py-2 rounded-md hover:bg-extra-light-gray peer-checked:bg-extra-light-gray" htmlFor={htmlFor}>{text}</label>            
        </div>
    );
};

export default Checkbox;