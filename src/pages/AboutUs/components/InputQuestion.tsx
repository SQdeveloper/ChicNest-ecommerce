import { MinusIcon, PlusIcon } from "../../../components/ui/icons";

interface Props {    
    name: string,
    question: string,
    defaultChecked?: boolean,
    id: string,
    response: string
}

const InputQuestion: React.FC<Props> = ({id, name, question, defaultChecked, response}) => {
    return (                      
        <div className="relative text-white bg-transparent rounded-md overflow-hidden flex flex-col">
            <input 
                className="hidden peer" 
                type="radio" 
                id={id} 
                name={name}                 
                defaultChecked= {defaultChecked}
            />
            <label 
                htmlFor={id}
                className="peer-checked:bg-brown cursor-pointer bg-white peer-checked:text-white text-dark-gray p-4 transition-all duration-300 flex flex-col gap-4 justify-center"
            >
                <div className="flex justify-between">
                    <h2 className="font-primary text-inherit text-[20px] pr-6">{question}</h2>                    
                </div>
                
            </label>
            <MinusIcon className="pointer-events-none border-white text-white peer-checked:block hidden absolute top-5 right-3 w-5 border rounded-md h-5"/>
            <PlusIcon className="pointer-events-none text-dark-gray peer-checked:hidden absolute top-5 right-3 w-5 border border-dark-gray rounded-md h-5"/>                    
            <div className={`peer-checked:pb-3 font-secondary bg-brown transition-all duration-300 px-4 peer-checked:max-h-96 h-auto overflow-hidden max-h-0 text-start`}>
                <p>
                    {response}
                </p>
            </div>
        </div>            
    );
};

export default InputQuestion;