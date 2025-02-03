import Link from "next/link"

export function ButtonStart(){

    return(
        <Link href="/auth/signup" className="bg-[rgba(193,239,0,1)] text-black rounded-[12px] h-[54px] w-[150px] font-sans text-xl font-bold leading-none text-center flex items-center justify-center" >
            Начать
        </Link>
    )
}