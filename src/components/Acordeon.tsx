import InputQuestion from "../pages/AboutUs/components/InputQuestion";
import questions from '../database/questions.json';

const Acordeon = () => {
    return (
        <div className="mt-10 flex flex-col gap-6 w-[720px] mx-auto">
            {
                questions.map((question, index) => (
                    <InputQuestion 
                        id={`question${index}`}
                        name="questions"
                        question={question.question}                
                        response={question.answer}
                    />                                        
                ))
            }            
        </div>
    );
};

export default Acordeon;