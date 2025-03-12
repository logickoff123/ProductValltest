import Image from "next/image"
import Link from "next/link"
import { EntryButtons } from "../entryButtons"

export function HeaderLanding() {

    return (
        <header className="pl-[120px] flex justify-between items-center w-full h-[100px] pr-[80px]">
            <Image src="/landing/sampleLogo.svg" width={187} height={44} alt="Logo" />
            <div className="flex flex-row gap-[41px] font-inter font-extrabold text-[16px] leading-6">
                <Link href="#opportunities" className="text-white text-xl font-sans leading-6">Возможности</Link>
                <Link href="#aboutUs" className="text-white text-xl font-sans leading-6">О нас</Link>
                <Link href="#roadmap" className="text-white text-xl font-sans leading-6">Дорожная карта</Link>
                <Link href="#contacts" className="text-white text-xl font-sans leading-6">Контакты</Link>
            </div>
            <EntryButtons />
        </header>
    )
}