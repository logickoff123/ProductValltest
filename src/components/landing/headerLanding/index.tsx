import Image from "next/image"
import { ButtonLogin } from "../buttonLogin"
import { ButtonSignup } from "../buttonSignup"

export function HeaderLanding(){

    return(
        <header className="flex justify-between items-center w-screen h-[100px] pl-[120px] pr-[80px]">
            <Image src="/landing/sampleLogo.png" width={144} height={34} alt="Logo"/>

            <div className="flex flex-row gap-[25px]">
                
                <button className="text-white">Услуги</button>

                <button className="text-white">Категории</button>

            </div>

            <div className="flex flex-row gap-[20px]">
                <ButtonSignup/>
                <ButtonLogin/>
            </div>
        </header>
    )
}