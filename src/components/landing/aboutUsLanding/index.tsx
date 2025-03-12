export function AboutUsLanding() {

    return (
        <div className="flex h-full flex-col px-[80px] mb-[457px] mt-[40px]">
            <p id="aboutUs" className='scroll-mt-[80px] font-inter font-semibold text-2xl leading-[24px] text-[rgba(193,239,0,1)] mb-[12px]'>О НАС</p>
            <p className='font-inter font-semibold text-5xl leading-[70px] text-white mb-[40px]'>Узнайте больше сейчас</p>
            
            <div className='bg-white w-[522px] h-[522px] rounded-[100%] flex absolute right-0 mt-[220px] mr-[380px] font-inter font-semibold 
            text-3xl leading-[180%] text-center items-center justify-center'>
                Создадим тесты и проверим <br />
                их, сохранив ваше время и <br />
                силы
            </div>

            <div className='bg-[rgba(193,239,0,1)] w-[723px] h-[723px] rounded-[100%] ml-[3px] mt-[320px] font-inter font-semibold text-3xl 
            leading-[180%] tracking-[0px] text-center flex items-center justify-center flex-col'>
                Мы хотим, чтобы наш продукт <br />
                помогал обучающимся проще <br />
                готовиться к тестам и экзаменам, а <br />
                преподавателем быстрее их <br />
                готовить и проверять.
                <span className='font-extrabold'>Освобождаем вас от рутины, для <br />жизни</span> 
            </div>

            <div className="bg-[rgba(193,239,0,1)] w-[564px] h-[564px] rounded-[100%] flex absolute right-0 mr-[100px] mt-[920px] font-inter 
            font-semibold text-3xl leading-[180%] tracking-[0px] text-center justify-center items-center flex-col">
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