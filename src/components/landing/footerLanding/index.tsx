import Image from "next/image"
import Link from "next/link"

export function FooterLanding() {

    return (
        <footer className="flex flex-col w-full">
            <hr />

            <div className="flex-row flex justify-between items-center py-[40px]">
                <Image src="/landing/sampleLogo.svg" width={144} height={35} alt="Logo" />
                <div className="flex gap-[40px] underline underline-offset-[0%] font-sans font-normal text-[16px] leading-[24px] text-white">
                    <Link href="#opportunities">Возможности</Link>
                    <Link href="#aboutUs">О нас</Link>
                    <Link href="#roadmap">Дорожная карта</Link>
                    <Link href="#contacts">Контакты</Link>
                </div>
            </div>
        </footer>
    )
}