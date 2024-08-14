import InputQuestion from "../pages/AboutUs/components/InputQuestion";
import questions from '../database/questions.json';

const Acordeon = () => {
    return (
        <div className="max-md:px-3 max-xl:max-w-full max-xl:px-10 mt-10 flex flex-col gap-6 max-w-[720px] w-full mx-auto">
            {
                questions.map((question, index) => (
                    <InputQuestion 
                        key={index}
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