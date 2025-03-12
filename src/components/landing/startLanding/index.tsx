import { ButtonStart } from "../buttonStart"

export function StartLanding() {

    return (
        <div className="flex h-screen justify-center w-1/2 flex-col pl-[120px] ">
            <div className="font-sans text-7xl font-bold leading-[82px]">

                <span className="block text-white">
                    Прокачай&nbsp;
                    <span className="text-[rgba(193,239,0,1)]">
                        Знания
                    </span>
                </span>
                <span className="block text-white">
                    для&nbsp;
                    <span className="text-[rgba(193,239,0,1)]">
                        Успешной
                    </span>
                </span>
                <span className="block text-white">
                    сдачи&nbsp;
                    <span className="text-[rgba(193,239,0,1)]">
                        Экзаменов
                    </span>
                </span>
                
            </div>
            <div className="text-white/50 font-sans text-[16px] font-normal leading-[28.8px] mt-[20px] mb-[36px] w-[487px] h-[87px]">Предоставляем вам новейшую систему составления<br/> тестовых заданий на базе ИИ, которая поможет расширить<br /> ваши знания.</div>
            <ButtonStart />
        </div>
    )
}