import Image from "next/image"

export function AboutUsLanding() {

    return (
        <div className="flex h-[1230px] flex-col mb-[80px] mt-[40px] w-auto max-w-[1440px] relative">
            <p id="aboutUs" className='scroll-mt-[80px] font-inter font-semibold text-xl leading-[24px] text-[rgba(193,239,0,1)] mb-[14px]'>О НАС</p>
            <p className='h-[44px] font-inter font-semibold text-4xl text-white mb-[40px]'>Узнайте больше сейчас</p>

            <div className="w-[352px]">
                <Image src="/landing/bigLogo.svg" width={352} height={87} alt="LogoValltest"/>
            </div>
            
            <div className='bg-white size-[402px] rounded-[100%] flex absolute right-0 mt-[220px] mr-[191px] font-inter font-semibold 
            text-2xl leading-[180%] text-center items-center justify-center'>
                Создадим тесты и проверим <br />
                их, сохранив ваше время и <br />
                силы
            </div>

            <div className='bg-[rgba(193,239,0,1)] size-[556px] rounded-[100%] mt-[224px] font-inter font-semibold text-2xl 
            leading-[180%] tracking-[0px] text-center flex items-center justify-center flex-col'>
                Мы хотим, чтобы наш продукт <br />
                помогал обучающимся проще <br />
                готовиться к тестам и экзаменам, а <br />
                преподавателем быстрее их <br />
                готовить и проверять.
                <span className='font-extrabold'>Освобождаем вас от рутины, для <br />жизни</span> 
            </div>

            <div className="bg-[rgba(193,239,0,1)] size-[434px] rounded-[100%] flex absolute right-0 mr-[0px] mt-[796px] font-inter 
            font-semibold text-[22px] leading-[180%] tracking-[0px] text-center justify-center items-center flex-col">
                <span className="font-extrabold">Наша цель -</span> 
                приносить в <br />
                образовательный процесс<br />
                больше инновационных <br />
                решений, которые будут<br />
                упрощать и делать легче <br />
                жизнь его участников.
            </div>
            
        </div>
    )
}