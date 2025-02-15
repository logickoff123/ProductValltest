'use client'
import Image from "next/image";
import { MainCardInfo, TakeTestButton, TestTag } from "@/components/catalog/testBlock/testCard/mainComponents";
import { TestCardInterface } from "@/types/TestCardInterface";

export function WideTestCard({ name = 'Python для самых маленьких',
    imgPath = "catalog/testCardImage.png",
    totalQuestions = 10,
    totalComplited = 151,
    lvl = "Средний",
    score = 4.9,
    tags = ['ИИ', 'Математика'] }: TestCardInterface) {


    return (
        <div className=" h-[200px] w-full flex items-center gap-4 rounded-xl border border-gray-300 bg-black p-3">
            {/* Картинка теста */}
            <Image
                src={imgPath}
                alt="Картинка"
                className="rounded-xl shrink-0"
                width={224}
                height={179}
            />
            <div className="w-full gap-2 h-full flex flex-col items-between ">
                {/* Название теста */}
                <div className=" text-xl w-full  text-white text-left">{name}</div>
                <div className="max-w-[350px] gap-4 h-full flex flex-col justify-center ">
                    <MainCardInfo totalQuestions={totalQuestions} totalComplited={totalComplited} lvl={lvl} />
                    <div className="flex w-full items-center gap-2">
                        {tags.map((value, index) => {
                            return (
                                <TestTag key={index} tag={value} />
                            )
                        })}
                    </div>
                </div>
                {/* Кнопка "Пройти тест" */}
                <TakeTestButton score={score} />
            </div>
        </div>
    );

}


