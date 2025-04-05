import Image from "next/image"
import Link from "next/link"

export function ContactsLanding() {

    return (
        <div className="flex h-full flex-col mb-[50px]">
            <p id="contacts" className='font-inter font-semibold text-xl leading-[24px] text-[rgba(193,239,0,1)] mb-[12px]'>КОНТАКТЫ</p>
            <p className='h-[44px] font-inter font-semibold text-4xl text-white mb-[60px]'>Оставайтесь на связи</p>
            <div className="flex justify-around items-center">
                
                <Link href="https://t.me/+jQ8lQeJQaBg2MWYy" target="_blank" className="group w-[436px] h-[109px] bg-mainBackground border border-[rgba(193,239,0,1)] rounded-[30px] px-[35px] 
                flex flex-row items-center justify-between hover:bg-[rgba(193,239,0,1)] transition-all duration-300">
                    <p className="text-white font-space font-bold text-[24px] group-hover:text-black transition-all duration-300">ЧАТ С НАМИ В TELEGRAM</p>
                    <Image src="/landing/Tg.svg" alt="" width={50} height={47}/>
                </Link>
            </div>
        </div>
    )
}