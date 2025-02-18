import { ExercisePreview } from "@/components/preview_ai_test/exercise"
import { PreviewTestAI } from "@/types/PreviewTestAI"

export function PreviewAIContainer() {

    // получаем данные через api 
    // пример таких данных
    // заменить на fetch 
    const test_data: PreviewTestAI = {
        name: 'idk random name i dont use it, its fo future',
        exercises: [
            {
                question: "is a good one?",
                answers: ['not', 'yeeee', '123123', 'randomtext']
            },
            {
                question: " is a good one?",
                answers: ['not', 'yeeee', '123123', 'randomtext']
            }]

    }
    return (

        <div className="flex flex-col justify-between items-center gap-6 ">
            {test_data.exercises.map((exercise, index) => {

                return (
                    <ExercisePreview question={exercise.question} answers={exercise.answers} index={index} key={index} />
                )
            })}
        </div>

    )
}