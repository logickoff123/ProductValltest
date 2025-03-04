'use client'
import { ExercisePreview } from "@/components/preview_ai_test/exercise";
import { useTestSession } from "@/store/TestSession/useTestSession";
import { Problem } from "@/types/Test/test";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";


export function PreviewAIContainer() {
    const { push } = useRouter();


    const areAllAnswersSelected = useTestSession((state) => state.areAllAnswersSelected());

    //использовать позже, когда бует страничка с результатами 
    const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";



    // ПРИМЕР, РЕАЛЬНЫЕ ДАННЫЕ ПОЛУЧАЮ ЧЕРЕЗ ЗАПРОС
    const setProblems = useTestSession((state) => state.setProblems)
    const problemsData = useTestSession((state) => state.problems)

    // удалить ТЕСТОВАЯ DATA
    const problems: Problem[] = [
        {
            question: "What is the capital of France?",
            answers: [
                { value: "Berlin", is_correct: false },
                { value: "Madrid", is_correct: false },
                { value: "Paris", is_correct: true },
                { value: "Rome", is_correct: false }
            ]
        },
        {
            question: "What is 2 + 2?",
            answers: [
                { value: "3", is_correct: false },
                { value: "4", is_correct: true },
                { value: "5", is_correct: false },
                { value: "6", is_correct: false }
            ]
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { value: "Earth", is_correct: false },
                { value: "Mars", is_correct: true },
                { value: "Jupiter", is_correct: false },
                { value: "Saturn", is_correct: false }
            ]
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: [
                { value: "Atlantic Ocean", is_correct: false },
                { value: "Indian Ocean", is_correct: false },
                { value: "Arctic Ocean", is_correct: false },
                { value: "Pacific Ocean", is_correct: true }
            ]
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            answers: [
                { value: "Charles Dickens", is_correct: false },
                { value: "Mark Twain", is_correct: false },
                { value: "William Shakespeare", is_correct: true },
                { value: "Jane Austen", is_correct: false }
            ]
        }
    ];

    useEffect(() => {
        setProblems(problems)
    }, []);



    return (
        <div className="flex flex-col justify-between items-center gap-6">
            {/* генерирую задания */}
            {problemsData.map((problem, index) => (
                <ExercisePreview
                    key={index}
                    question={problem.question}
                    answers={problem.answers}
                    exerciseIndex={index}
                />
            ))}

            {/* уведомление */}
            {!areAllAnswersSelected &&
                <div className="w-full py-8 flex justify-center text-center items-center rounded-xl text-red-500 border-2 bg-mainBackground border-red-500">
                    Выберите ответы для всех заданий!
                </div>
            }
            {/* кнопка проверки */}
            <button
                onClick={() => console.log(useTestSession.getState().checkResults())}
                disabled={!areAllAnswersSelected}
                className="w-full text-2xl border-[3px]  border-[#C1EF00] text-[#C1EF00] rounded-xl py-16 flex justify-center text-center items-center bg-mainBackground disabled:bg-secondaryBackground
                transition duration-200 ease-in-out hover:bg-[#C1EF00] hover:text-white"
            >
                Проверить
            </button>
        </div>
    );
}
