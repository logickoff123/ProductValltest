import Image from "next/image"
import { EntryButtons } from "../entryButtons"

export function HeaderLanding(){

    return(
        <header className="flex justify-between items-center w-screen h-[100px] pl-[120px] pr-[80px]">
            <Image src="/landing/sampleLogo.png" width={144} height={34} alt="Logo"/>

            <div className="flex flex-row gap-[25px]">
                
                <button className="text-white font-sans leading-6">Услуги</button>

                <button className="text-white font-sans leading-6">Категории</button>

            </div>

            <div className="flex flex-row gap-[20px]">
                <EntryButtons/>
            </div>
        </header>
    )
}