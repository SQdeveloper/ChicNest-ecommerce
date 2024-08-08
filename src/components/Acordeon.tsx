import InputQuestion from "../pages/AboutUs/components/InputQuestion";

const Acordeon = () => {
    return (
        <div className="mt-10 flex flex-col gap-6 w-[720px] mx-auto">
            <InputQuestion 
                id="question1"
                name="questions"
                question="title"
                defaultChecked
            />                        
            <InputQuestion 
                id="question2"
                name="questions"
                question="title"                
            />                                        
            <InputQuestion 
                id="question3"
                name="questions"
                question="title"                
            />                                        
            <InputQuestion 
                id="question4"
                name="questions"
                question="title"                
            />                                        
            <InputQuestion 
                id="question5"
                name="questions"
                question="title"                
            />                                        
        </div>
    );
};

export default Acordeon;