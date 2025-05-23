import Link from "next/link"

export function EntryButtons() {

    return (
        <div className="flex flex-row gap-[20px]">
            <Link href="/auth/signup" className="text-white font-sans font-normal text-[16px] leading-[24px] flex items-center justify-center">
                Регистрация
            </Link>
            <Link href="/auth/login" className="bg-[rgba(193,239,0,1)] text-black h-[40px] w-[97px] rounded-[12px] font-sans font-bold text-[16px] leading-[100%] flex items-center justify-center">
                Войти
            </Link>
        </div>
    )
}