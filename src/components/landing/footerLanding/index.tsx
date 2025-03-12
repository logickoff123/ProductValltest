import Image from "next/image"
import Link from "next/link"

export function FooterLanding() {

    return (
        <footer className="flex flex-col px-[180px] w-full h-[46px] gap-[50px]">
            <div className="flex-row gap-[41px] font-inter font-extrabold text-[16px] leading-6 flex justify-between items-center  mt-[50px]">
                <Image src="/landing/sampleLogo.svg" width={187} height={44} alt="Logo" />
                <Link href="#opportunities" className="text-white text-xl font-sans leading-6">Возможности</Link>
                <Link href="#aboutUs" className="text-white text-xl font-sans leading-6">О нас</Link>
                <Link href="#roadmap" className="text-white text-xl font-sans leading-6">Дорожная карта</Link>
                <Link href="#contacts" className="text-white text-xl font-sans leading-6">Контакты</Link>
            </div>
            
            <hr />

            <div className="flex flex-row text-white pb-[50px] justify-around">
                <p className="font-space-grotesk font-normal text-[18px] leading-[28px]">© 2024 Valltest. Все права защищены.</p>
                <a href="#" className="underline decoration-[2px] decoration-white/50 font-space-grotesk font-normal text-[18px] leading-[28px]">Политика конфиденциальности</a>
            </div>

        </footer>
    )
}