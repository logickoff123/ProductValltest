import Latex from  'react-latex';
import 'katex/dist/katex.min.css';


export function QuestionBlock({ question }: { question: string }) {
    return (
        <div className="w-full bg-mainBackground border-2 border-gray-500 text-3xl text-white rounded-xl py-16 flex justify-center items-center relative">
            <Latex>{question}</Latex>
            <div className="absolute left-2 bottom-2 bg-black text-white text-sm px-2 py-1 rounded-lg">
                Вопрос
            </div>
        </div>
    );
}
