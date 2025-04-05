import Image from "next/image"
import Link from "next/link"

export function ContactsLanding() {

    return (
        <div className="flex h-full flex-col px-[80px] mt-[40px]">
            <p id="contacts" className='font-inter font-semibold text-2xl leading-[24px] text-[rgba(193,239,0,1)] mb-[12px]'>КОНТАКТЫ</p>
            <p className='font-inter font-semibold text-5xl leading-[70px] text-white mb-[60px]'>Оставайтесь на связи</p>
            <div className="flex justify-around items-center">
                
                <Link href="https://t.me/+jQ8lQeJQaBg2MWYy" className="group w-[653px] h-[169px] bg-mainBackground border border-[rgba(193,239,0,1)] rounded-[43px] px-[30px] 
                flex flex-row items-center justify-between hover:bg-[rgba(193,239,0,1)] transition-all duration-300">
                    <p className="text-white font-inter font-bold text-3xl leading-[45px] group-hover:text-black transition-all duration-300">ЧАТ С НАМИ В TELEGRAM</p>
                    <Image src="/landing/Tg.svg" alt="" width={103} height={91}/>
                </Link>
            </div>
        </div>
    )
}