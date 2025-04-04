import { ButtonStart } from "../buttonStart"

export function StartLanding() {

    return (
        <div className="flex max-h-[940px] h-full justify-center w-1/2 flex-col pt-[104px] mb-[184px]">
            <div className="">

                <span className="block text-white font-sans text-[64px] font-bold leading-[82px]">
                    Сделай тест
                </span>
                <span className="block text-[rgba(193,239,0,1)] font-sans text-[75px] font-bold leading-[82px]">
                    за 1 минуту
                </span>
                
            </div>
            <div className="text-white ont-inter text-[18px] leading-[180%] tracking-normal mt-[20px] mb-[36px] w-[487px] h-[43px]">
                С ПОМОЩЬЮ <span className="text-[rgba(193,239,0,1)] font-inter font-bold text-[24px] leading-[180%] tracking-normal">AI</span> ГЕНЕРАТОРА
            </div>
            <ButtonStart />
        </div>
    )
}