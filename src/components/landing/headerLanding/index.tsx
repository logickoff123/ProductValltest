import Image from "next/image"
import Link from "next/link"
import { EntryButtons } from "../entryButtons"

export function HeaderLanding() {

    return (
        <header className="flex justify-between items-center w-full h-[100px] pr-[80px]">
            <Image src="/landing/sampleLogo.svg" width={144} height={34} alt="Logo" />
            <div className="flex flex-row gap-[25px]">
                <Link href="/services" className="text-white font-sans leading-6">Услуги</Link>
                <Link href="/catalog" className="text-white font-sans leading-6">Категории</Link>
            </div>
            <EntryButtons />
        </header>
    )
}