import Link from "next/link";
import Image from "next/image";
import { DynamicSVG } from "../testScore";


export function TestCard({
  name = 'Python для самых маленьких',
  imgPath = "catalog/testCardImage.png",
  totalQuestions = 10,
  totalComplited = 151,
  lvl = "Средний",
  score = 4.9
}: {
  // remove OPTIONAL ?
  name?: string;
  imgPath?: string;
  totalQuestions?: number;
  totalComplited?: number;
  lvl?: "Легкий"|"Средний"|"Тяжелый";
  score?:number|string 
}) {

  // функция вызова блока информации
  const InfoBlock = ({
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
      <div className=" w-full flex  items-center justify-between text-testInfoText ">
          <InfoBlock message="Пройдено:" iconPath="/catalog/iconComp.svg" iconSize={14} info={totalComplited} />
          <InfoBlock message="Вопросы:" iconPath="/catalog/iconQuestion.svg" iconSize={14} info={totalQuestions} />
          <InfoBlock message="" iconPath="/catalog/iconLvl.svg" iconSize={20} info={lvl} />
      </div>

      {/* Кнопка "Пройти тест" */}
      <div className=" w-full flex items-center justify-between ">
        <Link href="#" className="flex items-center gap-2  bg-white px-4  rounded-lg">
          <div  className="text-black text-sm px-6 py-[10px]">Пройти тест</div>
          <Image src="/catalog/arrow.svg" alt="иконка" width={12} height={12} />
        </Link>
          <DynamicSVG score= {score}/>
        
      </div>
    </div>
  );
}
