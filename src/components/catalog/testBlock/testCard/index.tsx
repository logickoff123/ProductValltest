'use client'
import Image from "next/image";
import { MainCardInfo, TakeTestButton } from "./mainComponents";
import { TestCardInterface } from "@/types/TestCardInterface";






export function TestCard({
  name = 'Python для самых маленьких',
  imgPath = "catalog/testCardImage.png",
  totalQuestions = 10,
  totalComplited = 151,
  lvl = "Средний",
  score = 4.9
}: TestCardInterface) {



  return (
    <div className=" min-w-[400px] min-h-[350px] flex flex-col items-center justify-between rounded-xl border border-gray-300 bg-black p-3">
      {/* Картинка теста */}
      <Image
        src={`/${imgPath}`}
        alt="Картинка"
        className="rounded-xl"
        width={380}
        height={167}
      />
      {/* Название теста */}
      <div className=" w-full text-base text-white text-left">{name}</div>
      {/* Основная информация */}
      <MainCardInfo totalQuestions={totalQuestions} totalComplited={totalComplited} lvl={lvl} />
      {/* Кнопка "Пройти тест" */}
      <TakeTestButton score={score} />
    </div>
  );
}
