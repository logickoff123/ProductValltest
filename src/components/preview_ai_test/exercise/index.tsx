import { Exercise } from "@/types/PreviewTestAI"
import { TaskBlock } from "./answerBlock";

interface ExerciseUI extends Exercise {
    index: number;
}


export function ExercisePreview({ question, answers, index }: ExerciseUI) {

    const colours = ['lime', 'indigo', 'sky', 'orange']

    return (
        <div className="bg-secondaryBackground flex flex-col gap-4 p-6 rounded-xl w-full text-center justify-between">
            <div className=" text-white text-[32px] text-start">{`Задание №${index + 1}`}</div>

            <TaskBlock answer={question} colour="mainBackground" isQuestion={true} />

            {answers.map((answer, answerIndex) => {
                return (
                    <TaskBlock answer={answer} key={answerIndex} colour={colours[answerIndex]} />
                )
            })}
        </div>
    )
}