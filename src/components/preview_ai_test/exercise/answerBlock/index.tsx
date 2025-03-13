import { useTestSession } from "@/store/TestSession/useTestSession";
import Latex from  'react-latex';
import 'katex/dist/katex.min.css';


// Карта цветов вынесена за компонент
const colourMap: { [key: string]: string } = {
    lime: "bg-teal-500",
    indigo: "bg-indigo-500",
    sky: "bg-sky-600",
    orange: "bg-orange-500",
    mainBackground: "bg-mainBackground"
};

export function TaskBlock({ answer, colour, exerciseIndex }: { answer: string; colour: string, exerciseIndex: number }) {

    const selectedAnswer = useTestSession((state) => state.selectedAnswers[exerciseIndex]);
    const setAnswers = useTestSession((state) => state.setAnswers);


    const onSubmit = () => setAnswers(exerciseIndex, answer);


    return (
        <button

            onClick={onSubmit}
            className={`w-full ${colourMap[colour]} text-2xl text-white 
            rounded-xl py-16 border-[3px]  flex justify-center 
            text-center items-center transition duration-200 ease-in-out hover:border-[3px] hover:border-[#C1EF00]
            ${selectedAnswer === answer ? 'border-[#C1EF00]' : 'border-mainBackground'}
            `}
        >
             <Latex>{answer}</Latex>
        </button>
    );
}
