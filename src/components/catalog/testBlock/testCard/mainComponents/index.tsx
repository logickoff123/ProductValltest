import Image from "next/image";
import Link from "next/link";
import { DynamicSVG } from "../../testScore";


// Кнопка Пройти тест 
export const TakeTestButton = ({ score }: { score: string | number }) => {
    return (
        <div className=" w-full flex items-center justify-between" >
            <Link href="#" className="flex items-center gap-2  bg-white px-4  rounded-lg transition duration-300 hover:scale-105 hover:bg-[#C1EF00]">
                <div className="text-black text-sm px-6 py-[10px]">Пройти тест</div>
                <Image src="/catalog/arrow.svg" alt="иконка" width={12} height={12} />
            </Link>
            <DynamicSVG score={score} />
        </div>
    )
}
//Добавить кнопку РЕДАКТИРОВАТЬ ТЕСТ 

// функция вызова блока информации
export const InfoBlock = ({
    message,
    iconPath,
    iconSize,
    info,
}: {
    message: string;
    iconPath: string;
    iconSize: number;
    info: string | number;
}) => (
    <div className="flex gap-2 text-xs">
        <Image src={iconPath} alt="Иконка" width={iconSize} height={16} />
        {message} {info}
    </div>
);



// Основная Информация Карточки
interface MainCardInfo {
    totalQuestions: number;
    totalComplited: number;
    lvl: "Легкий" | "Средний" | "Тяжелый";
}
export const MainCardInfo = ({ totalQuestions, totalComplited, lvl }: MainCardInfo) => {

    return (<div className=" w-full flex  items-center justify-between text-testInfoText ">
        <InfoBlock message="Пройдено:" iconPath="/catalog/iconComp.svg" iconSize={14} info={totalComplited} />
        <InfoBlock message="Вопросы:" iconPath="/catalog/iconQuestion.svg" iconSize={14} info={totalQuestions} />
        <InfoBlock message="" iconPath="/catalog/iconLvl.svg" iconSize={20} info={lvl} />
    </div>)

}

// Тэги Теста
export function TestTag({ tag }: { tag: string }) {
    return (
        <span className="bg-mainBackground inline-block rounded-xl text-white px-4 py-2 max-w-max">
            {tag}
        </span>
    );
}
