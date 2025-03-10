'use client'
import { TaskBlock } from "./answerBlock";
import { Problem } from "@/types/Test/test";
import { QuestionBlock } from "./questionBlock";
import 'katex/dist/katex.min.css';

interface ExerciseUI extends Problem {
    exerciseIndex: number;
}


export function ExercisePreview({ question, answers, exerciseIndex }: ExerciseUI) {

    const colours = ['lime', 'indigo', 'sky', 'orange']

    return (
        <div className="bg-secondaryBackground flex flex-col gap-4 p-6 rounded-xl w-full text-center justify-between">
            <div className=" text-white text-[32px] text-start">{`Задание №${exerciseIndex + 1}`}</div>
            <QuestionBlock question={question} />



            {answers.map((answer, answerIndex) => {
                return (
                    <TaskBlock
                        answer={answer.value}
                        key={answerIndex}
                        colour={colours[answerIndex]}
                        exerciseIndex={exerciseIndex} />
                )
            })}
        </div>
    )
}