import Image from "next/image"
import Link from "next/link"
import { EntryButtons } from "../entryButtons"

export function HeaderLanding() {

    return (
        <header className="flex justify-between items-center w-full h-[120px]">
            <Image src="/landing/sampleLogo.svg" width={144} height={35} alt="Logo" />
            <div className="flex flex-row gap-[41px] font-inter font-extrabold text-[16px] leading-6">
                <Link href="#opportunities" className="text-white font-sans font-normal text-[16px] leading-[24px]">Возможности</Link>
                <Link href="#aboutUs" className="text-white font-sans font-normal text-[16px] leading-[24px]">О нас</Link>
                <Link href="#roadmap" className="text-white font-sans font-normal text-[16px] leading-[24px]">Дорожная карта</Link>
                <Link href="#contacts" className="text-white font-sans font-normal text-[16px] leading-[24px]">Контакты</Link>
            </div>
            <EntryButtons />
        </header>
    )
}