import { OppButtons } from '../oppButton/index';
import Image from 'next/image';

export function OpportunitiesLanding() {

    return (
        <div className="flex h-full flex-col mb-[90px]">
            <p id='opportunities' className='scroll-mt-[80px] font-inter font-semibold text-xl leading-[24px] text-[rgba(193,239,0,1)] mb-[12px]'>ВОЗМОЖНОСТИ</p>
            <p className='h-[44px] font-inter font-semibold text-4xl text-white mb-[40px] flex items-center'>Сервис для прокачки знаний</p>
            <div className="flex flex-row gap-[24px]">
               
                <div className="group w-full h-[272px] rounded-[24px] bg-transparent border-[1px] border-[rgba(193,239,0,1)] 
                py-[30px] pl-[40px] hover:bg-[rgba(193,239,0,1)] flex flex-col justify-start transition-all duration-300">
                    
                    <div className='flex flex-row gap-[20px] mb-[30px]'>
                        <Image src="landing/CreateTest.svg" width={48} height={48} alt="GenAI"/>
                        <p className='text-white font-inter font-bold text-2xl flex items-center h-[46px] group-hover:text-black transition-all duration-300'>Создавайте тесты</p>
                    </div>

                    <div className='flex flex-col justify-between h-full'>
                        <div className='font-inter font-normal text-base leading-[180%] text-white/50 pr-[40px] group-hover:text-black transition-all duration-300'>
                            Добавляйте вопросы, меняйте их и быстро настраивайте с помощью инструментов конструктора
                        </div>
                        <div className='text-[rgba(193,239,0,1)] group-hover:text-black font-inter font-medium text-[18px] leading-[140%] transition-all duration-300'>
                            Создать&nbsp;&nbsp;&nbsp;&gt;
                        </div>
                    </div>

                </div>

                <div className="group w-full h-[272px] rounded-[24px] bg-transparent border-[1px] border-[rgba(193,239,0,1)] 
                py-[30px] pl-[40px] hover:bg-[rgba(193,239,0,1)] flex flex-col justify-start transition-all duration-300">
                    
                    <div className='flex flex-row gap-[20px] mb-[30px]'>
                        <Image src="landing/GenAI.svg" width={48} height={48} alt="GenAI"/>
                        <p className='text-white font-inter font-bold text-2xl flex items-center h-[46px] group-hover:text-black transition-all duration-300'>Генерация ИИ</p>
                    </div>

                    <div className='flex flex-col justify-between h-full'>
                        <div className='font-inter font-normal text-base leading-[180%] text-white/50 pr-[40px] group-hover:text-black transition-all duration-300'>
                            Искуственный  интелект создает тест за Вас на любую выбранную тему
                        </div>
                        <div className='text-[rgba(193,239,0,1)] group-hover:text-black font-inter font-medium text-[18px] leading-[140%] transition-all duration-300'>
                            Сгенерировать&nbsp;&nbsp;&nbsp;&gt;
                        </div>
                    </div>

                </div>

                <div className="group w-full h-[272px] rounded-[24px] bg-transparent border-[1px] border-[rgba(193,239,0,1)] 
                py-[30px] pl-[40px] hover:bg-[rgba(193,239,0,1)] flex flex-col justify-start transition-all duration-300">
                    
                    <div className='flex flex-row gap-[20px] mb-[30px]'>
                        <Image src="landing/LibTest.svg" width={48} height={48} alt="GenAI"/>
                        <p className='text-white font-inter font-bold text-2xl flex items-center h-[46px] group-hover:text-black transition-all duration-300'>Библиотека тестов</p>
                    </div>
                    
                    <div className='flex flex-col justify-between h-full'>
                        <div className='font-inter font-normal text-base leading-[180%] text-white/50 pr-[40px] group-hover:text-black transition-all duration-300'>
                            Сейчас функция находится в разработке <br />
                            <br />
                            Надеемся, что Вы останетесь с нами!
                        </div>
                        <div className='text-[rgba(193,239,0,1)] group-hover:text-black font-inter font-medium text-[18px] leading-[140%] transition-all duration-300'>
                            Дорожная карта&nbsp;&nbsp;&nbsp;&gt;
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}