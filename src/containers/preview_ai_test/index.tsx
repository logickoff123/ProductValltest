'use client'
import { ExercisePreview } from "@/components/preview_ai_test/exercise";
import { useTestSession } from "@/store/TestSession/useTestSession";
import { Problem } from "@/types/Test/test";
import { useRouter } from 'next/navigation';

export function PreviewAIContainer() {
    const { push } = useRouter();
    const areAllAnswersSelected = useTestSession((state) => state.areAllAnswersSelected);

    const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

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
                { value: 3, is_correct: false },
                { value: 4, is_correct: true },
                { value: 5, is_correct: false },
                { value: 6, is_correct: false }
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

    return (
        <div className="flex flex-col justify-between items-center gap-6">
            {problems.map((problem, index) => (
                <ExercisePreview
                    key={index}
                    question={problem.question}
                    answers={problem.answers}
                    index={index}
                />
            ))}

            <button
                onClick={() => push(`${currentPath}/result`)}
                disabled={!areAllAnswersSelected()}
                className="w-full text-2xl border-[6px]   text-white rounded-xl py-16 flex justify-center text-center items-center bg-mainBackground disabled:bg-gray-500"
            >
                Проверить
            </button>
        </div>
    );
}
